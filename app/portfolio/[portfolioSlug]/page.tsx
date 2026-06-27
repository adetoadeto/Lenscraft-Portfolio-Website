import { notFound } from "next/navigation";
import { PortfolioDetailHeader } from "@/components/portfolio/portfolio-details/portfolio-detail-header";
import PortfolioDetailGrid from "@/components/portfolio/portfolio-details/portfolio-detail-grid";
import { portfolioData } from "@/lib/text";
import classes from "./page.module.css"
interface PortfolioDetailPage {
    params: {
        portfolioSlug: string
    }
}

export async function generateMetadata({ params }: PortfolioDetailPage) {
    const { portfolioSlug } = await params;

    if (!portfolioSlug) {
        notFound
    }

    return {
        title: portfolioSlug.toUpperCase(),
        description: `${portfolioSlug} Photography`
    }
}

export default async function PortfolioDetailPage({ params }: PortfolioDetailPage) {

    const { portfolioSlug } = await params;

    if (!portfolioSlug) {
        notFound()
    }

    const data = portfolioData[portfolioSlug as keyof typeof portfolioData];

    return (
        <section className={classes["portfolio-details"]}>
            <PortfolioDetailHeader content={data.content} banner={data.banner} />
            <PortfolioDetailGrid gallery={data.gallery} />
        </section>
    )
}