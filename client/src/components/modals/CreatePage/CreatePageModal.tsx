import React, { useCallback, useState } from 'react'
import LayoutCreatePageModal from './LayoutCreatePageModal'
import OverviewStep from './OverviewStep';
import PricingStep from './PricingStep';
import DescriptionStep from './DescriptionStep';

enum STEPS {
    OVERVIEW = 0,
    PRICING = 1,
    DESCRIPTION = 2,
    REQUIREMENT = 3,
    GALLERY = 4,
    PUBLISH = 5,
}

const CreatePageModal = () => {
    const [steps, setSteps] = useState(STEPS.OVERVIEW);

    const onNext = () => {
        setSteps((value) => value + 1);
    };



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

    return (
        <LayoutCreatePageModal
            body={bodyContent}
            submitButton={onNext}
        />
    );
};


export default CreatePageModal