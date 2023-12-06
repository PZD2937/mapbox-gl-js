// This file is generated. Edit build/generate-style-code.js, then run `yarn run codegen`.
// @flow
/* eslint-disable */

import styleSpec from '../../../src/style-spec/reference/latest.js';
import {Properties, DataConstantProperty} from "../../../src/style/properties.js";

export type LayoutProps = {|
    "visibility": DataConstantProperty<"visible" | "none">,
|};

const layout: Properties<LayoutProps> = new Properties({
    "visibility": new DataConstantProperty(styleSpec["layout_windy"]["visibility"]),
});

export type PaintProps = {|
    "windy-opacity": DataConstantProperty<number>,
    "windy-gradient": DataConstantProperty<string>,
    "windy-render-mode": DataConstantProperty<string>,
    "windy-hue-rotate": DataConstantProperty<number>,
    "windy-brightness-min": DataConstantProperty<number>,
    "windy-brightness-max": DataConstantProperty<number>,
    "windy-saturation": DataConstantProperty<number>,
    "windy-contrast": DataConstantProperty<number>,
    "windy-resampling": DataConstantProperty<"linear" | "nearest">
|};

const paint: Properties<PaintProps> = new Properties({
    "windy-opacity": new DataConstantProperty(styleSpec["paint_windy"]["windy-opacity"]),
    "windy-gradient": new DataConstantProperty(styleSpec["paint_windy"]["windy-gradient"]),
    "windy-render-mode": new DataConstantProperty(styleSpec["paint_windy"]["windy-render-mode"]),
    "windy-hue-rotate": new DataConstantProperty(styleSpec["paint_windy"]["windy-hue-rotate"]),
    "windy-brightness-min": new DataConstantProperty(styleSpec["paint_windy"]["windy-brightness-min"]),
    "windy-brightness-max": new DataConstantProperty(styleSpec["paint_windy"]["windy-brightness-max"]),
    "windy-saturation": new DataConstantProperty(styleSpec["paint_windy"]["windy-saturation"]),
    "windy-contrast": new DataConstantProperty(styleSpec["paint_windy"]["windy-contrast"]),
    "windy-resampling": new DataConstantProperty(styleSpec["paint_windy"]["windy-resampling"])
});

// Note: without adding the explicit type annotation, Flow infers weaker types
// for these objects from their use in the constructor to StyleLayer, as
// {layout?: Properties<...>, paint: Properties<...>}
export default ({ paint, layout }: $Exact<{
  paint: Properties<PaintProps>, layout: Properties<LayoutProps>
}>);
