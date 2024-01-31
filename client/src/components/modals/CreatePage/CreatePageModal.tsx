import React, { useCallback, useState } from 'react'
import LayoutCreatePageModal from './LayoutCreatePageModal'
import OverviewStep from './OverviewStep';
import PricingStep from './PricingStep';
import DescriptionStep from './DescriptionStep';
import ImageUpload from './ImageUpload';
import SuccessStep from './SuccessStep';

enum STEPS {
    OVERVIEW = 0,
    PRICING = 1,
    DESCRIPTION = 2,
    IMAGE = 3,
    PUBLISH = 4,
}

const CreatePageModal = () => {
    const [steps, setSteps] = useState(STEPS.OVERVIEW);
    const [isLoading, setIsLoading] = useState(false);

    const onNext = () => {
        setSteps((value) => value + 1);
    };

    const onBack = () => {
        setSteps((value) => value - 1);
    };

    const onSubmit = () => {
        if (steps === STEPS.PUBLISH) {
            return;
        };

        onNext();
    };

    const handleBack = useCallback(() => {
        if (steps === STEPS.OVERVIEW) {
            return null;
        }

        onBack();
    }, [onBack]);


    let bodyContent = (
        <OverviewStep />
    );

    //* 2nd STEPS PRICING
    if (steps === STEPS.PRICING) {
        bodyContent = (
            <PricingStep />
        )
    };

    //* 3rd STEPS DESCRIPTION 
    if (steps === STEPS.DESCRIPTION) {
        bodyContent = (
            <DescriptionStep />
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
            submitButton={onSubmit}
            backButton={handleBack}
            disabled={isLoading}
            label={steps === STEPS.PUBLISH ? 'Publish' : 'Save & Continue'}
            subLabel={steps === STEPS.OVERVIEW ? '': 'Back'}
        />
    );
};


export default CreatePageModal