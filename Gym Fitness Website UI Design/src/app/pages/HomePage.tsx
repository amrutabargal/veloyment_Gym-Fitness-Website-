import { Hero } from '../components/Hero';
import { MembershipPlans } from '../components/MembershipPlans';
import { TrainingPrograms } from '../components/TrainingPrograms';
import { TrainerProfiles } from '../components/TrainerProfiles';
import { SuccessStories } from '../components/SuccessStories';
import { CTASection } from '../components/CTASection';

export function HomePage() {
  return (
    <div>
      <Hero />
      <MembershipPlans />
      <TrainingPrograms />
      <TrainerProfiles />
      <SuccessStories />
      <CTASection />
    </div>
  );
}
