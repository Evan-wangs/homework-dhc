'use client';

import { usePathname } from "next/navigation";

export default ({ searchParams }: {searchParams: { name: string }}) => {
    const path = usePathname();

    return <div>
        {path}<br />
        demo page......<br />
        如果不携带cookie(name=af)进行访问, 则直接重定向到baidu<br />
        顶部为横幅, 左侧为menu, 右侧为内容(初始内容显示字符串DEMO即可), 点击menu跳转到下面3个页面<br />
        横幅可以受主题颜色影响<br />
        {searchParams.name}
    </div>;
}