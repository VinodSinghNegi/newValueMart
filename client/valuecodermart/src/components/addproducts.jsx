import React from 'react';
import Axios from 'axios'
import Cookie from "js-cookie"

import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Check from '@material-ui/icons/Check';
import SettingsIcon from '@material-ui/icons/Settings';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';

import Nameproduct from "./nameproduct"
import Items from "./itemsdropdown"
import Saveproduct from "./saveproduct"


const useQontoStepIconStyles = makeStyles({
    root: {
        color: '#eaeaf0',
        display: 'flex',
        height: 22,
        alignItems: 'center',
    },
    active: {
        color: '#784af4',
    },
    circle: {
        width: 8,
        height: 8,
        borderRadius: '50%',
        backgroundColor: 'currentColor',
    },
    completed: {
        color: '#784af4',
        zIndex: 1,
        fontSize: 18,
    },
});

function QontoStepIcon(props) {
    const classes = useQontoStepIconStyles();
    const { active, completed } = props;

    return (
        <div
            className={clsx(classes.root, {
                [classes.active]: active,
            })}
        >
            {completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}
        </div>
    );
}

QontoStepIcon.propTypes = {
    active: PropTypes.bool,
    completed: PropTypes.bool,
};

const ColorlibConnector = withStyles({
    alternativeLabel: {
        top: 22,
    },
    active: {
        '& $line': {
            backgroundImage:
                'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
        },
    },
    completed: {
        '& $line': {
            backgroundImage:
                'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
        },
    },
    line: {
        height: 3,
        border: 0,
        backgroundColor: '#eaeaf0',
        borderRadius: 1,
    },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
    root: {
        backgroundColor: '#ccc',
        zIndex: 1,
        color: '#fff',
        width: 50,
        height: 50,
        display: 'flex',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    active: {
        backgroundImage:
            'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    },
    completed: {
        backgroundImage:
            'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    },
});

function ColorlibStepIcon(props) {
    const classes = useColorlibStepIconStyles();
    const { active, completed } = props;

    const icons = {
        1: <SettingsIcon />,
        2: <GroupAddIcon />,
        3: <VideoLabelIcon />,
    };

    return (
        <div
            className={clsx(classes.root, {
                [classes.active]: active,
                [classes.completed]: completed,
            })}
        >
            {icons[String(props.icon)]}
        </div>
    );
}

ColorlibStepIcon.propTypes = {
    active: PropTypes.bool,
    completed: PropTypes.bool,
    icon: PropTypes.node,
};

const useStyles = makeStyles(theme => ({
    root: {
        width: '90%',
    },
    button: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

function getSteps() {
    return ['Product', 'Items ', 'Save'];
}


export default function CustomizedSteppers() {


    const [productName, setProductName] = React.useState(undefined)

    const getProductName = (val) => {
        setProductName(val);
    }

    const [itemList, setItemList] = React.useState(undefined)

    const getItemList = (val) => {
        setItemList(val)
    }

    const [quantity, setQuantity] = React.useState([])

    const getQuantity = (id, name, count) => {


        setQuantity([{ id: id, name: name, count: count }])


    }

    const [helper, setHelper] = React.useState(0)

    const changingHelper = (val) => {
        setHelper(1)
    }


    const [finalItemList, setFinalItemList] = React.useState([])

    if (helper === 1) {

        setFinalItemList([...finalItemList, quantity])

        setHelper(0)


    }



    function getStepContent(step) {
        switch (step) {
            case 0:
                return <Nameproduct giveProductName={getProductName} productName={productName} />;
            case 1:
                return <Items giveItemList={getItemList} itemList={itemList} />;
            case 2:
                return <Saveproduct productName={productName} itemList={itemList} quantity={getQuantity} helper={changingHelper} />;
            default:
                return 'Unknown step';
        }
    }
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {

        if (activeStep === 0 && productName) {
            setActiveStep(prevActiveStep => prevActiveStep + 1);
        }

        else if (activeStep === 1 && itemList) {

            setActiveStep(prevActiveStep => prevActiveStep + 1);
        }
        else if (activeStep === 2)
            setActiveStep(prevActiveStep => prevActiveStep + 1);

    }


    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    };

    if (activeStep === steps.length) {


        const fun = async () => {
            const getCookie = await JSON.parse(Cookie.get("mytoken"))
            const getUserId = getCookie.userId

            const response = await Axios.post('/items', {
                userId: getUserId,
                productName: productName,
                itemList: itemList,
            })

            console.log(response.data)
            if (response.data) {
                await Axios.post("/setquantity", {
                    productName: productName,
                    productId: response.data,
                    itemQuantity: finalItemList
                })
            }


        }
        fun()

    }



    return (
        <div className={classes.root}>
            <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
                {steps.map(label => (
                    <Step key={label}>
                        <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div>

                {activeStep === steps.length ? (
                    <div>
                        <div className={classes.instructions}>
                            <p className="text-center">
                                Congratulations !! your product saved successfully.
                            </p>
                        </div>

                    </div>
                ) : (
                        <div>
                            <div className={classes.instructions}>{getStepContent(activeStep)}</div>
                            <div>
                                <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                                    Back
                                </Button>

                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleNext}
                                    className={classes.button} >

                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}

                                </Button>

                            </div>
                        </div>
                    )}
            </div>
        </div>
    );
}
