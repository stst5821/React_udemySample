import React from 'react';

export const ColorfulMessage = (props) => {
    const { color , children} = props; // propsから中身を分割代入することで、毎回props.colorと書かずにcolorだけ書くだけでよくなる。
    console.log(props);
    // cssを設定し、定数contentStyleに代入。
    const contentStyle = {
        // color : props.color, // contentstyle内のcolorに、App.jsxで指定したprops.colorを代入。
        color, // オブジェクトとプロパティ名が同じの場合は、このようにプロパティ名を省略できる。
        fontSize: '18px' // 通常のCSSだと、font-sizeと書くが、Reactの場合はキャメルケースで書く。
      };
    return (
        // props.children = App.jsxで<Component></Component>で囲った中身を表示する
        <p style={contentStyle}>{children}</p>
    );
}