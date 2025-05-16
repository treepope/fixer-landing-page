
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "กรุณากรอกชื่อ-นามสกุล",
  }),
  phoneNumber: z.string().min(9, {
    message: "กรุณากรอกเบอร์โทรศัพท์ที่ถูกต้อง",
  }),
  email: z.string().email({
    message: "กรุณากรอกอีเมลที่ถูกต้อง",
  }).optional().or(z.literal('')),
  location: z.string().min(2, {
    message: "กรุณาระบุพื้นที่ที่ให้บริการ",
  }),
  serviceType: z.string().min(2, {
    message: "กรุณาระบุประเภทบริการที่สนใจ",
  }),
  experience: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const ApplicationForm = () => {
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      email: "",
      location: "",
      serviceType: "",
      experience: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
    // Here you would normally send the data to your backend
    
    toast({
      title: "ส่งข้อมูลสำเร็จ",
      description: "ขอบคุณสำหรับความสนใจ เราจะติดต่อกลับในเร็วๆ นี้",
    });
    
    form.reset();
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6 mb-8">
      <h3 className="text-xl font-bold mb-4 text-center">กรอกข้อมูลสมัคร</h3>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ชื่อ-นามสกุล *</FormLabel>
                <FormControl>
                  <Input placeholder="กรุณากรอกชื่อ-นามสกุล" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>เบอร์โทรศัพท์ *</FormLabel>
                <FormControl>
                  <Input placeholder="กรุณากรอกเบอร์โทรศัพท์" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>อีเมล</FormLabel>
                <FormControl>
                  <Input placeholder="กรุณากรอกอีเมล (ถ้ามี)" {...field} />
                </FormControl>
                <FormDescription>
                  ไม่จำเป็นต้องกรอก
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>พื้นที่ให้บริการ *</FormLabel>
                <FormControl>
                  <Input placeholder="เช่น กรุงเทพฯ, นนทบุรี" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="serviceType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ประเภทบริการที่สนใจ *</FormLabel>
                <FormControl>
                  <Input placeholder="เช่น แบตเตอรี่, ยางรถยนต์" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="experience"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ประสบการณ์</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="กรุณากรอกประสบการณ์ทำงาน (ถ้ามี)" 
                    className="min-h-32" 
                    {...field} 
                  />
                </FormControl>
                <FormDescription>
                  ไม่จำเป็นต้องกรอก
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            className="btn-primary w-full"
          >
            สมัครเป็นช่างตอนนี้
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ApplicationForm;
