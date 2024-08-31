'use client';

import { usePathname } from "next/navigation";

export default ({ searchParams }: {searchParams: { name: string }}) => {
    const path = usePathname();

    return <div>
        {path}<br />
        c page......<br />
        b和c为一组布局, 有边框.<br />
        用于state, 初始值为[1,2]并显示出来<br />
        有2个子组件, 输入框和按钮<br />
        组件1: 初始化时一个表单, 包含1个输入框, 2个按钮<br />
        接收父组件传入的callback<br />
        按钮1按下, 输入框的内容作为参数跳转到 /af/demo/c/输入的内容<br />
        输入内容为1,2,3打开页面, 有一个loading效果<br />
        其他内容404<br />
        按钮2按下, 乐观显示 提交完了, 调用接口, 接口返回status500后撤回提交完了<br />
        输入999抛异常进入error页<br />
        按钮3: 按下后调用父组件callback<br />
        组件2:<br />
        按钮1: 按下后组件1输入框获得焦点<br />
        按钮2: 按下后向父组件的state添加一个随机数<br />
        {searchParams.name}
    </div>;
}