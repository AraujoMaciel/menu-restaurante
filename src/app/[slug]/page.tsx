
import { db } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ConsumptionMethod from "@prisma/client";
import Link from "next/link";

interface propsComponents{
    params: Promise<{slug: string}>;
}

export default async function PageSlug ({params}: propsComponents) {
    
    const {slug} = await params;
    const restaurant = await db.restaurant.findFirst({where: {slug:slug}});

    if(!restaurant){
        return notFound();
    }

    return(
        <div className="h-screen px-6 pt-24 flex flex-col justify-center items-center">
            <div className="flex flex-col items-center gap-2">
                <Image 
                    src={restaurant.avatarImageUrl}
                    alt={restaurant.name}
                    width={84}
                    height={84}
                />
                <h2 className="font-semibold">{restaurant.name}</h2>
            </div>

            <div className="text-center pt-24 space-y-2">
                <h3 className="text-2xl font-semibold">Seja Bem-Vindo!</h3>
                <p className="opacity-70">Escolha como prefere aproveitar sua refeição. Estamos aqui para oferecer praticidade e sabor em cada detalhe</p>
            </div>

            <div className="pt-14 grid grid-cols-2 gap-4">  
                <Card>
                    <CardContent className="gap-8 py-8 flex flex-col items-center">
                    <div className="relative h-[80px] w-[80px]">
                            <Image 
                                src="/hamburguer.png"
                                alt="Ilustração de Hamburguer"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <Link href={`/${slug}/menu?consumptionMethod=DINE_IN`}>
                            <Button variant={"secondary"} className="rounded-full">Para comer aqui</Button>
                        </Link>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="gap-8 py-8 flex flex-col items-center">
                        <div className="relative h-[80px] w-[80px]">
                            <Image 
                                src="/sacola.png"
                                alt="Ilustração de Hamburguer"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <Link href={`/${slug}/menu?consumptionMethod=TAKEAWAY`}>
                            <Button variant={"secondary"} className="rounded-full">Para levar</Button>
                        </Link>
                    </CardContent>
                </Card>

            </div>
        </div>
    );
}
