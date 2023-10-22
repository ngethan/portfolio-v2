"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import Stars from "@/components/Stars";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const FormSchema = z.object({
  dob: z.date({
    required_error: "A date of birth is required.",
  }),
});

const Index = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    if (
      new Date(data.dob).getMonth() === 9 &&
      new Date(data.dob).getDate() === 22
    )
      window.location.href = "/baba/confirm/b";
    else window.location.href = "/baba/failed";
  }

  return (
    <div className="items-center flex flex-col w-full h-[100vh] justify-center text-white">
      <Stars />
      <Card className="pt-5">
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="dob"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="text-white text-lg font-bold">
                      when&apos;s your birthday??
                    </FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-[240px] pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span className="text-white">Pick a date</span>
                            )}
                            <CalendarIcon className="text-white ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          initialFocus
                          fromYear={1970}
                          toYear={1970}
                          defaultMonth={new Date(1970, 9)}
                        />
                      </PopoverContent>
                    </Popover>
                    <FormDescription>
                      just to confirm you&apos;re really baba...
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
