import {
  transition,
  trigger,
  style,
  animate,
  state,
  AnimationTriggerMetadata
} from "@angular/animations";

export function dynamicHeight(seconds: number = 0.1): AnimationTriggerMetadata {
  return trigger("dynamicHeight", [
    state(
      "open",
      style({
        overflow: "hidden"
      })
    ),
    state(
      "closed",
      style({
        overflow: "hidden",
        height: "0px"
      })
    ),
    transition("closed <=> open", [animate(`${seconds}s`)])
  ]);
}
