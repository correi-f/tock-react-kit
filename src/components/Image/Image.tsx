import styled, { StyledComponent } from '@emotion/styled';
import React, {
  DetailedHTMLProps,
  HTMLAttributes,
  ImgHTMLAttributes,
} from 'react';
import TockTheme from 'styles/theme';
import { prop } from 'styled-tools';

export const CardOuter: StyledComponent<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  unknown,
  TockTheme
> = styled.div`
  max-width: ${prop<any>('theme.sizing.conversation.width')};
  margin: 0.5em auto;
`;

const CardImage: StyledComponent<
  DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>,
  unknown,
  TockTheme
> = styled.img`
  max-width: 100%;
  max-height: 100%;

  ${prop<any>('theme.overrides.card.cardImage', '')};
`;

export const CardContainer: StyledComponent<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  unknown,
  TockTheme
> = styled.div`
  padding: 0.5em;
  background: ${prop<any>('theme.palette.background.card')};
  color: ${prop<any>('theme.palette.text.card')};
  border-radius: ${prop<any>('theme.sizing.borderRadius')};
  border: 2px solid ${prop<any>('theme.palette.text.card')};
  width: 20em;

  ${prop<any>('theme.overrides.card.cardContainer', '')};
`;

export interface ImageProps {
  title: string;
  url?: string;
}

const Image = React.forwardRef<HTMLDivElement, ImageProps>(function imageRender(
  { title, url }: ImageProps,
  ref,
) {
  return (
    <CardOuter ref={ref}>
      <CardContainer>
        {url && (
          <a target="_blank" href={url} rel="noreferrer">
            <CardImage src={url} alt={title} />
          </a>
        )}
      </CardContainer>
    </CardOuter>
  );
});

export default Image;
