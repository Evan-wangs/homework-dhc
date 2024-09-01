'use client';

import { usePathname } from "next/navigation";

export default ({ searchParams }: {searchParams: { name: string }}) => {
    const path = usePathname();

    return <div>
        {path}<br />
        a page......<br />
        获取数据之前打印一个客户端环境变量, 名字随便<br />
        点击id为偶数的项目时, 会以dialog形式展示/af路由, 只显示那张图片即可<br />
        {searchParams.name}
    </div>;
}