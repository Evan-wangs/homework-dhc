'use client';

import { usePathname } from "next/navigation";

export default ({ searchParams }: {searchParams: { name: string }}) => {
    const path = usePathname();

    return <div>
        {path}<br />
        b page......<br />
        初始化时在body上注册点击事件, 打印当前路由<br />
        左右2个区域, 分别显示 b 和 b1<br />
        2个区域都包裹在受主题颜色影响到border下<br />
        点击顶部按钮, 跳转到 /af/demo/b/bb<br />
        此时左侧更新为 b-bb, 右侧维持 b1<br />
        f5刷新后, 左侧保持 b-bb, 右侧显示为输入框和2个按钮<br />
        按钮1用于控制一个span的显示, 内容为输入框的内容, 默认背景色被绿色<br />
        如果span渲染宽度大于40px, 则变更为红色背景, 且默认的绿色背景不能被看见<br />
        按钮2用于提交输入框内容为主题颜色<br />
        {searchParams.name}
    </div>;
}