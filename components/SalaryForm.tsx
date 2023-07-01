'use client'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  specialty: z.string(),
  yearsPostTraining: z
    .coerce
    .number()
    .int({
      message: "Enter as a whole number.",
    })
    .min(0),
  baseSalary: z
    .coerce
    .number()
    .int({
      message: "Enter as a whole number.",
    })
    .min(0),
  annualBonus: z
    .coerce
    .number()
    .int({
      message: "Enter as a whole number.",
    })
    .min(0),
  isFullTime: z.coerce.boolean(),
  hoursPerWeek: z
    .coerce
    .number()
    .int({
      message: "Enter as a whole number.",
    })
    .min(0),
  city: z.string(),
  state: z.string(),
  hospital: z.string(),
});

type Props = {
  closeModal: () => void
}

export default function SalaryForm({ closeModal }: Props) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      specialty: "",
      yearsPostTraining: 0,
      baseSalary: 0,
      annualBonus: 0,
      isFullTime: true,
      hoursPerWeek: 0,
      city: "",
      state: "",
      hospital: "",
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = (
    values,
    event
  ) => {
    event?.preventDefault()
    console.log(values)
    // Perform your asynchronous submission logic here
    // For example, make an API request
    // await submitForm(values);

    // Clear the form fields
    form.reset()
    closeModal()
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 overflow-y-auto">
        <div className="md:grid md:grid-cols-3 md:gap-8">
          <FormField
            control={form.control}
            name="specialty"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Specialty</FormLabel>
                <FormControl>
                  <Input
                    placeholder="e.g. Anesthesiology"
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormDescription>Your medical specialty.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="yearsPostTraining"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Years Post Training</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="e.g. 5"
                    type="number"
                    min={0}
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Number of years post residency as a whole number.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="baseSalary"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Base Salary</FormLabel>
                <FormControl>
                  <Input
                    placeholder="$100,000"
                    type="number"
                    min={0}
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Your base salary as a whole number.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="annualBonus"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Annual Bonus</FormLabel>
                <FormControl>
                  <Input
                    placeholder="$50,000"
                    type="number"
                    min={0}
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Your annual bonus as a whole number.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="isFullTime"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Time / Part Time</FormLabel>
                <Select
                  onValueChange={(value) => {
                    const isFullTime =
                      value === "true"
                        ? true
                        : value === "false"
                        ? false
                        : Boolean(value);
                    field.onChange(isFullTime);
                  }}
                  defaultValue={String(field.value)}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Full Time" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="true">Full Time</SelectItem>
                    <SelectItem value="false">Part Time</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>
                  Are you full time or paid hourly.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="hoursPerWeek"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Hours / Week</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="40"
                    type="number"
                    min={0}
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Hours worked per week if part time.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input
                    placeholder="e.g. Seattle"
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  City of your current employer.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem>
                <FormLabel>State</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="e.g. Washington"
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  State of your current employer.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="hospital"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Hospital</FormLabel>
                <FormControl>
                  <Input
                    placeholder="e.g. UW Medicine"
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Hospital you currently work at.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex justify-end">
          <Button 
            type="button"
            variant="secondary"
            className="px-4 py-2 mx-2 rounded-md"
            onClick={closeModal}
          >
            Close
          </Button>
          <Button
            type="submit"
            variant="default"
            className="px-4 py-2 mx-2 text-white bg-blue-600 rounded-md"
          >
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
}
