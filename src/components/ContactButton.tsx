import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

interface ContactButtonProps {
  variant?: "default" | "secondary";
  size?: "sm" | "default" | "lg";
  className?: string;
  children?: React.ReactNode;
}

const ContactButton = ({ variant = "default", size = "default", className, children }: ContactButtonProps) => {
  const handleEmailClick = () => {
    window.location.href = "mailto:m_dz@o2.pl";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+48602269495";
  };

  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <Button
        onClick={handleEmailClick}
        variant={variant}
        size={size}
        className={className}
      >
        <Mail className="w-4 h-4 mr-2" />
        {children || "Wyślij e-mail"}
      </Button>
      <Button
        onClick={handlePhoneClick}
        variant="outline"
        size={size}
        className={className}
      >
        <Phone className="w-4 h-4 mr-2" />
        Zadzwoń
      </Button>
    </div>
  );
};

export default ContactButton;