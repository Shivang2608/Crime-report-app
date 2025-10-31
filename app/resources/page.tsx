import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ShieldAlert, BookMarked, Gavel } from "lucide-react"; // Icons

export default function ResourcesPage() {
  return (
    <div className="h-[calc(100vh-4rem)] p-4 md:p-8 flex flex-col">
      
      {/* --- HEADING (SOLID BLUE) --- */}
      <h1 className="text-4xl font-bold text-center mb-8 text-[rgb(59_130_246)]">
        Resources & Support
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 flex-grow">
        
        {/* Card 1: Emergency Contacts */}
        <Card className="bg-black border-blue-500/30 flex flex-col">
          <CardHeader className="items-center text-center">
            <ShieldAlert className="w-12 h-12 text-[rgb(59_130_246)]" /> {/* --- ICON (SOLID BLUE) --- */}
            <CardTitle className="text-2xl font-bold text-white pt-4">
              Emergency Contacts
            </CardTitle>
          </CardHeader>
          
          <CardContent className="text-center text-white space-y-4 text-lg font-bold p-8 flex-grow flex flex-col justify-center">
            <p>National Police: 100</p>
            <p>National Ambulance: 102</p>
            <p>Fire & Rescue: 101</p>
          </CardContent>
        </Card>

        {/* Card 2: Safety Guides */}
        <Card className="bg-black border-blue-500/30 flex flex-col">
          <CardHeader className="items-center text-center">
            <BookMarked className="w-12 h-12 text-[rgb(59_130_246)]" /> {/* --- ICON (SOLID BLUE) --- */}
            <CardTitle className="text-2xl font-bold text-white pt-4">
              Safety Guides
            </CardTitle>
          </CardHeader>
          
          <CardContent className="text-center text-white space-y-4 text-lg font-bold p-8 flex-grow flex flex-col justify-center">
            <p>How to Secure Your Home</p>
            <p>Personal Safety Tips</p>
            <p>Online Fraud Prevention</p>
          </CardContent>
        </Card>

        {/* Card 3: Legal & Support */}
        <Card className="bg-black border-blue-500/30 flex flex-col">
          <CardHeader className="items-center text-center">
            <Gavel className="w-12 h-12 text-[rgb(59_130_246)]" /> {/* --- ICON (SOLID BLUE) --- */}
            <CardTitle className="text-2xl font-bold text-white pt-4">
              Legal & Support
            </CardTitle>
          </CardHeader>
          
          <CardContent className="text-center text-white space-y-4 text-lg font-bold p-8 flex-grow flex flex-col justify-center">
            <p>Know Your Rights</p>
            <p>Victim Support Services</p>
            <p>Filing a Formal Report</p>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}