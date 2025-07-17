import { InlineWidget } from "react-calendly";
import { useAuth } from "../auth/AuthContext";

const CalendlyPage = () => {
  const { currentUser } = useAuth();

  if (!currentUser || !currentUser.email) {
    return (
      <div className="text-center py-10 text-lg font-semibold">
        Loading Calendly...
      </div>
    );
  }

  const calendlyURL = `https://calendly.com/goran-dotin/30min?email=${encodeURIComponent(currentUser.email)}`;

  return (
    <div>
      <h2 className="text-2xl text-center mt-7 font-bold">
        Book a Call, {currentUser.email} <br />
        please Don't spam ! You will be caught !
      </h2>
      <InlineWidget url={calendlyURL} styles={{ height: "700px" }} />
    </div>
  );
};

export default CalendlyPage;
