'use client';

import { usePathname } from "next/navigation";

export default ({ searchParams }: {searchParams: { name: string }}) => {
    const path = usePathname();

    return <div>
        {path}<br />
        af page......<br />
        包含一个输入密码的表单<br />
        登陆按钮提交到登陆接口/api/login, 密码123则重定向到/af/demo, 不是123则重定向到/af/123<br />
        包含一个p标签, 显示运行时的环境变量 NAME 的值<br />
        包含一个p标签, 显示环境变量文件 ENV_NAME 的值, test环境显示test, dev环境显示dev<br />
        {searchParams.name}
    </div>;
}