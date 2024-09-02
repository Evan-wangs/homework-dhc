'use client';

import { useFetchData } from "@repo/state/state";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default () => {
    const path = usePathname();
    const baseName = path.split('/')[0];
    const state = useFetchData(`${baseName}/list`);

    console.log("Client Env: ", process.env.NEXT_PUBLIC_ENV_NAME)

    return (
        <>
            {state.map((item: { id: number }) => (
                <Link 
                    href={(item.id % 2 === 0) ? `http://localhost:3000/af/cn` : ''} 
                    key={item.id}
                    style={{ textDecoration: 'none' }}
                >
                    <div 
                        style={{ 
                            width: '300px', 
                            height: '40px', 
                            lineHeight: '40px', 
                            border: '1px solid white',
                            backgroundColor: 'lightblue'
                        }}
                    >
                        {item.id}
                    </div>  
                </Link>
            ))}
        </>
    )
    
}