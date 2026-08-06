import { FeaturesHero } from "@/components/features/FeaturesHero";
import { CostEfficiency } from "@/components/features/CostEfficiency";
import { WhatsAppSimulator } from "@/components/pricing/WhatsAppSimulator";
import { ProductShowcase } from "@/components/features/ProductShowcase";
import { FeatureComparison } from "@/components/features/FeatureComparison";
import { ProductHighlights } from "@/components/features/ProductHighlights";
import { IntegrationLogos } from "@/components/features/IntegrationLogos";
import { FeatureCategories } from "@/components/features/FeatureCategories";
import { Integrations } from "@/components/features/Integrations";
import { CTA } from "@/components/features/CTA";

export default function FeaturesPage() {
  return (
    <div className="flex flex-col w-full">
      <FeaturesHero />
      <CostEfficiency />
      <WhatsAppSimulator />
      <ProductShowcase />
      <FeatureComparison />
      <ProductHighlights />
      <IntegrationLogos />
      <FeatureCategories />
      <Integrations />
      <CTA />
    </div>
  );
}
