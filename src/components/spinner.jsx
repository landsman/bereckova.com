import styled, { keyframes } from 'styled-components';

const Spinner = ({ padding, globalSpinner }) => (
    <SpinnerContainer padding={padding}>
        <StyledSpinner
            src={
                globalSpinner
                    ? '/icons/small-spinner.svg'
                    : '/icons/spinner.svg'
            }
            alt='Loading'
        />
    </SpinnerContainer>
);

const spin = keyframes`
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
`;

const SpinnerContainer = styled.div`
    display: flex;
    width: 100%;
    padding: ${({ padding }) => padding || '20px 0'};
`;

const StyledSpinner = styled.img`
    animation-name: ${spin};
    animation-duration: 3000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    margin: auto;
`;

export default Spinner;