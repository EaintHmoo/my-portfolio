import ContactForm from "@/components/ContactForm";
import { SectionLayout } from "@/components/SectionLayout";

export default function Contact()
{
    return (
        <SectionLayout
        title="Contact Me"
        intro="Have a question or something to share? I'd love to hear from you — just use the form below!"
        >
            <ContactForm token={process.env.WEB3_FORM_ACCESS_KEY_HERE!}/>
        </SectionLayout>
    );
}