import {
  StyledPrimaryButton,
  StyledPrimaryLink,
  StyledSecondaryButton,
  StyledSecondaryLink,
} from "./styles";
import { Props } from "./types";
export const PrimaryButton = ({ text, to }: Props): JSX.Element =>
  to ? (
    <StyledPrimaryLink to={to}>{text}</StyledPrimaryLink>
  ) : (
    <StyledPrimaryButton>{text}</StyledPrimaryButton>
  );

export const SecondaryButton = ({ text, to }: Props): JSX.Element =>
  to ? (
    <StyledSecondaryLink to={to}>{text}</StyledSecondaryLink>
  ) : (
    <StyledSecondaryButton>{text}</StyledSecondaryButton>
  );
