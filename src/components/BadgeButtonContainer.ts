import { CSSProperties, Component, createElement } from "react";

import { BadgeButton, BootstrapStyle } from "./BadgeButton";

export interface BadgeButtonContainerProps {
    class: string;
    style: CSSProperties;
    valueAttribute?: PluginWidget.EditableValue<string>;
    label: PluginWidget.DynamicValue<string>;
    bootstrapStyle: BootstrapStyle;
    badgeButtonValue: PluginWidget.DynamicValue<string>;
    onClickAction: PluginWidget.ActionValue;
}

type Handler = () => void;

export default class BadgeButtonContainer extends Component<BadgeButtonContainerProps> {
    private readonly clickHandler: Handler = this.handleOnClick.bind(this);

    render() {
            return createElement(BadgeButton, {
            bootstrapStyle: this.props.bootstrapStyle,
            className: this.props.class,
            defaultValue: this.props.badgeButtonValue ? this.props.badgeButtonValue.value : "",
            label: this.props.label ? this.props.label.value : "",
            onClickAction: this.clickHandler,
            style: this.props.style,
            value: this.props.valueAttribute ? this.props.valueAttribute.value : ""
        });
    }

    private handleOnClick() {
        if (this.props.onClickAction) {
            this.props.onClickAction.execute();
        }
    }
}
