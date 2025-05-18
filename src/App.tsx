import React, { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// ส่วนประกอบหลัก
import Navbar from "./components/Navbar";

// หน้าเพจ
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import MyServices from "./pages/myservice";
import Partnership from "./pages/partnership";
import ContactUs from "./pages/contact-us";
import AboutUs from "./pages/about-us";

const queryClient = new QueryClient();

const App: React.FC = () => {
  useEffect(() => {
    document.title =
      "สมัครเป็นช่างบนแพลตฟอร์ม 24CARFIX | หางานซ่อมรถ ซ่อมรถนอกสถานที่ ทำงานอิสระ";
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          
          <div>
            <Routes>
              <Route path="/" element={<Index />} />

              {/* Service pages */}
              <Route path="/my-services" element={<MyServices />} />
              {/* General pages */}
              <Route path="/partnership" element={<Partnership />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/about-us" element={<AboutUs />} />
              {/* Catch-all route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
