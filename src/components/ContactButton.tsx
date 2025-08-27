import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ContactButtonProps {
  variant?: "default" | "secondary";
  size?: "sm" | "default" | "lg";
  className?: string;
  children?: React.ReactNode;
}

const ContactButton = ({ variant = "default", size = "default", className, children }: ContactButtonProps) => {
  const navigate = useNavigate();

  const handleFormClick = () => {
    navigate("/formularz-kontaktowy");
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+48602269495";
  };

  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <Button
        onClick={handleFormClick}
        variant={variant}
        size={size}
        className={className}
      >
        <Mail className="w-4 h-4 mr-2" />
        {children || "Napisz wiadomość"}
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