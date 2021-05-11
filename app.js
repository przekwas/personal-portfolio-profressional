class TreeNode {
	constructor(value, left, right) {
		this.value = value;
		this.left = left;
		this.right = right;
	}
}

const breadthFirstTraversal = tree => {
	if (tree == null) {
		return;
	}

	let queue = [tree];
	let depth = 1,
		counter = 0;

	while (queue.length > 0) {
		let item = queue.shift();
		let value = item.value;

		console.log(queue.length);

		if (item.left === null && item.right === null) {
			continue;
		}

		if (item.left !== null) {
			queue.push(item.left);
		}

		if (item.right !== null) {
			queue.push(item.right);
		}
	}
};

const t = new TreeNode(
	1,
	new TreeNode(2, new TreeNode(4, null, null), new TreeNode(5, null, null)),
	new TreeNode(3, new TreeNode(6, null, null), new TreeNode(7, null, null))
);

/*
      1
	/   \
   2     3
  /\    /\
 4 5   6 7
	
*/

breadthFirstTraversal(t);

