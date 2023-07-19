'use client'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler, useWatch } from "react-hook-form";
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
import { states } from "@/_data/_statesArray";
import { hospitals } from "@/_data/_hospitals";
import { medicalSpecialties } from "@/_data/_specialties";

const formSchema = z.object({
  specialty: z.string(),
  yearsPostTraining: z
    .coerce
    .number()
    .int({
      message: "Enter as a whole number.",
    })
    .min(0),
  totalCompensation: z
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
  isFullTime: z.string(),
  hoursPerWeek: z
    .coerce
    .number()
    .int({
      message: "Enter as a whole number.",
    })
    .min(0),
  vacationWeeksAnnually: z
    .coerce
    .number()
    .int({
      message: "Enter as a whole number.",
    })
    .min(0),
  city: z.string().regex(/^[^\d]+$/, "Must not contain numbers"),
  state: z.string(),
  hospital: z.string(),
  providerGender: z.string(),
});

type Props = {
  closeModal: () => void
}

export default function SalaryForm({ closeModal }: Props) {  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      specialty: "",
      yearsPostTraining: undefined,
      totalCompensation: undefined,
      baseSalary: undefined,
      annualBonus: undefined,
      isFullTime: "",
      hoursPerWeek: undefined,
      vacationWeeksAnnually: undefined,
      city: "",
      state: "",
      hospital: "",
      providerGender: "",
    },
  });

  const isFullTime = useWatch({
    control: form.control,
    name: "isFullTime",
    defaultValue: "",
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid md:grid-cols-3 md:gap-6">
          <FormField
            control={form.control}
            name="hospital"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Hospital</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent
                    className="max-h-40"
                  >
                    {hospitals.map(hospital => (
                      <SelectItem key={hospital} value={hospital}>{hospital}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormDescription>
                  Hospital you currently work at.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="specialty"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Specialty</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent
                    className="max-h-40"
                  >
                    {medicalSpecialties.map(specialty => (
                      <SelectItem key={specialty} value={specialty}>{specialty}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormDescription>
                  Your medical specialty.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="yearsPostTraining"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Years Experience</FormLabel>
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
            name="totalCompensation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Total Comp</FormLabel>
                <FormControl>
                  <Input
                    placeholder="e.g. $150,000"
                    type="number"
                    min={0}
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Your last year&apos;s full compensation.
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
                <FormLabel>Yearly Base Salary</FormLabel>
                <FormControl>
                  <Input
                    placeholder="e.g. $100,000"
                    type="number"
                    min={0}
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  If possible, provide your non-variable compensation.
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
                <FormLabel>Yearly Bonus</FormLabel>
                <FormControl>
                  <Input
                    placeholder="e.g. $50,000"
                    type="number"
                    min={0}
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  If possible, provide the portion of your pay which varied, or was tied to performance.
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
                <FormLabel>FT / PT Employment</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Full Time">Full Time</SelectItem>
                    <SelectItem value="Part Time">Part Time</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>
                  Are you full time or part time?
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
                <FormLabel>Weekly Hours</FormLabel>
                <FormControl>
                  <Input
                    placeholder="e.g. 40"
                    type="number"
                    min={0}
                    // disabled={isFullTime !== 'Part Time'}
                    // className={isFullTime !== 'Part Time' ? 'bg-gray-200' : ''}
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Hours worked per week.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="vacationWeeksAnnually"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Weeks Vacation</FormLabel>
                <FormControl>
                  <Input
                    placeholder="e.g. 4"
                    type="number"
                    min={0}
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Number of vacation weeks granted annually.
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
                    pattern="^[^\d]+$"
                    title="Must not contain numbers."
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
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent
                    className="max-h-40"
                  >
                    {states.map(state => (
                      <SelectItem key={state} value={state}>{state}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormDescription>
                  State of your current employer.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="providerGender"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Gender</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Male">Male</SelectItem>
                    <SelectItem value="Female">Female</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>
                  This information will not be shared and is for statistical purposes only.
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
