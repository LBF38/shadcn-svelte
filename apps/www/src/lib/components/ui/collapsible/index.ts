import * as CollapsiblePrimitive from "$primitives/collapsible";
import Content from "./CollapsibleContent.svelte";

const Root = CollapsiblePrimitive.Root;
const Trigger = CollapsiblePrimitive.Trigger;

export {
	Root,
	Content,
	Trigger,
	//
	Root as Collapsible,
	Content as CollapsibleContent,
	Trigger as CollapsibleTrigger
};
