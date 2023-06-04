import { ItemView, WorkspaceLeaf } from "obsidian";

import Component from "./Component.svelte";

export const VIEW_TYPE = "enso-view";

export class EnsoView extends ItemView {
	component: Component;

	constructor(leaf: WorkspaceLeaf) {
		super(leaf);
	}

	getViewType() {
		return VIEW_TYPE;
	}

	getDisplayText() {
		return "Enso";
	}

	async onOpen() {
		this.component = new Component({
			target: this.contentEl,
			// props: {
			// 	variable: 1
			// }
		});
	}

	async onClose() {
		this.component.$destroy();
	}
}
