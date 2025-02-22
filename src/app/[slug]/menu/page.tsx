import { db } from "@/lib/prisma";

interface propsPageMenu{
    param: Promise<{slug: string}>;
}

export default async function PageMenu(props: propsPageMenu){
    // const {slug} = await props.param;
    // const restaurant = await db.restaurant.findFirst({where: {slug:slug}});
    return(
        <div>
            Menu
        </div>
    )
}