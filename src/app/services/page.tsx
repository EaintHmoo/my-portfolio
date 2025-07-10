import { type Metadata } from 'next'
import { SectionLayout } from '@/components/SectionLayout'
import { Services } from '@/components/Services';

export const metadata: Metadata = {
  title: 'Serivces',
  description: 'What I offer.',
}

export default function Skills() {
  return (
    <SectionLayout
    title='My Services'
    intro='What I offer'
    id="services"
      >
          <Services/>   
    </SectionLayout>
  )
}
