import { Component, createElement } from "react";
import { BadgeButton, BadgeButtonProps } from "./components/BadgeButton";
import { BadgeButtonContainerProps } from "./components/BadgeButtonContainer";

declare function require(name: string): string;

// tslint:disable-next-line class-name
export class preview extends Component<BadgeButtonContainerProps, {}> {
    render() {
        return createElement("div", { ref: this.parentInline },
            createElement(BadgeButton, this.transformProps(this.props))
        );
    }

    private parentInline(node?: HTMLElement | null) {
        // Temporary fix, the web modeler add a containing div, to render inline we need to change it.
        if (node && node.parentElement) {
            node.parentElement.style.display = "inline-block";
        }
    }

    private transformProps(props: BadgeButtonContainerProps): BadgeButtonProps {
        const valueAttributeArray = props.valueAttribute ? props.valueAttribute.value : "";
        return {
            bootstrapStyle: props.bootstrapStyle,
            className: props.class,
            label: props.label ? props.label.value : "",
            style: props.style,
            value: valueAttributeArray
                ? "[" + valueAttributeArray + "]"
                : props.badgeButtonValue
                    ? props.badgeButtonValue.value
                    : ""
        };
    }
}

export function getPreviewCss() {
    return require("./ui/BadgeButton.css");
}
