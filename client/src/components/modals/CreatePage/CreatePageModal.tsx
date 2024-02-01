import { useCallback, useContext, useState } from 'react'
import LayoutCreatePageModal from './LayoutCreatePageModal'
import OverviewStep from './OverviewStep';
import PricingStep from './PricingStep';
import DescriptionStep from './DescriptionStep';
import ImageUpload from './ImageUpload';
import SuccessStep from './SuccessStep';
import { SubmitHandler, useForm, FieldValues } from 'react-hook-form';
import { AuthContext } from '@/context/auth/AuthContext';
import toast from 'react-hot-toast';
import { newRequest } from '@/lib/newRequest';

enum STEPS {
    OVERVIEW = 0,
    PRICING = 1,
    DESCRIPTION = 2,
    IMAGE = 3,
    PUBLISH = 4,
};

const CreatePageModal = () => {
    const [steps, setSteps] = useState(STEPS.OVERVIEW);
    const { isLoading, setIsLoading } = useContext(AuthContext);
    const {
        register,
        handleSubmit
    } = useForm();

    const onNext = () => {
        setSteps((value) => value + 1);
    };

    const onBack = () => {
        setSteps((value) => value - 1);
    };

    //* Submit & Next  
    const onSubmit: SubmitHandler<FieldValues> = async (value) => {
        if (steps !== STEPS.PUBLISH) {
            return onNext();
        };

        console.log(value);
        setIsLoading(true);


        try {
            const res = await newRequest.post('/gig', value);
            console.log(res.data);

            setTimeout(() => {
                window.location.replace('/')
            }, 1000);
            toast.success('Gig has been create.');
        } catch (error) {
            toast.error('Something went wrong, pleas try again.');
            console.log(error);
        }
    };

    //* Back 
    const handleBack = useCallback(() => {
        if (steps === STEPS.OVERVIEW) {
            return null;
        }

        onBack();
    }, [onBack]);


    let bodyContent = (
        <>
            <OverviewStep
                register={register}
            />
        </>
    );

    //* 2nd STEPS PRICING
    if (steps === STEPS.PRICING) {
        bodyContent = (
            <PricingStep
                register={register}
            />
        )
    };

    //* 3rd STEPS DESCRIPTION 
    if (steps === STEPS.DESCRIPTION) {
        bodyContent = (
            <DescriptionStep
                register={register}
            />
        )
    };

    //* 4 STEPS IMAGE
    if (steps === STEPS.IMAGE) {
        bodyContent = (
            <ImageUpload />
        )
    }

    //* 5 PUBLISH
    if (steps === STEPS.PUBLISH) {
        bodyContent = (
            <SuccessStep />
        )
    }

    return (
        <LayoutCreatePageModal
            body={bodyContent}
            submitButton={handleSubmit(onSubmit)}
            backButton={handleBack}
            disabled={isLoading}
            label={steps === STEPS.PUBLISH ? 'Publish' : 'Save & Continue'}
            subLabel={steps === STEPS.OVERVIEW ? '' : 'Back'}
        />
    );
};


export default CreatePageModal