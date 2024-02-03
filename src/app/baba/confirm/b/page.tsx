"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
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
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const FormSchema = z.object({
    bestChild: z.string({
        required_error: "you gotta pick one",
    }),
});

const Index = () => {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    });

    function onSubmit(data: z.infer<typeof FormSchema>) {
        if (data.bestChild === "ethan") {
            window.location.href = "/baba/confirm/true";
        } else {
            window.location.href = "/baba/failed";
        }
    }

    return (
        <div className="flex h-[100vh] w-full flex-col items-center justify-center text-white">
            <Card className="pt-5">
                <CardContent>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-6"
                        >
                            <FormField
                                control={form.control}
                                name="bestChild"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-lg font-bold text-white">
                                            who&apos;s the best child?
                                        </FormLabel>
                                        <Select
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                        >
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="pick a child" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="ethan">
                                                    ethan
                                                </SelectItem>
                                                <SelectItem value="hannah">
                                                    hannah
                                                </SelectItem>
                                                <SelectItem value="mia">
                                                    mia
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormDescription>
                                            pick a child
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
