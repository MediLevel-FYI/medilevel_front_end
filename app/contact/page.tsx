import ContactUs from '@/components/ContactUs'

const Contact = () => {
    return (

        <div className="max-w-[85rem] px-4 py-5 sm:px-6 lg:px-8 lg:py-7 mx-auto">
            <div className="max-w-2xl mx-auto mb-5 text-center lg:mb-14">
                <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
                    Contact Us
                </h2>
            </div>
            <ContactUs />
        </div>

    )
}

export default Contact
