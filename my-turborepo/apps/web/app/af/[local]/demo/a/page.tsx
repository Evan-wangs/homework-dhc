'use client';

import { useCustomData } from '../../../../hook/_page';

export default ({ searchParams }: {searchParams: { name: string }}) => {
    const data = useCustomData();
    console.log("data", data)

    return <div>
        a
    </div>;
}