import styled from '@emotion/native';

export const ContentContainer = styled.View`
  flex: 1;
  height: 100%;
  background: ${({theme}: {theme?: any}) => theme.colors.white};
  padding: 0px 20px 0px 20px;
`;
export const Logo = styled.Image`
  width: 139px;
  height: 29px;
  object-fit: contain;
`;
export const HeaderSection = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding-top: 10px;
`;
export const IconWrap = styled.Pressable`
  margin: 40px 0;
`;
export const HeaderText = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;
export const Title = styled.Text`
  text-align: center;
  color: ${({theme}: {theme?: any}) => theme.colors.black[900]};
  ${({
    theme: {
      typography: {getTextStyle, weights, variants},
    },
  }) => getTextStyle({weight: weights.Bold, variant: variants.HEADER4})}
`;

export const SubTitle = styled.Text`
  text-align: center;
  color: ${({theme}: {theme?: any}) => theme.colors.gray[900]};
  ${({
    theme: {
      typography: {getTextStyle, weights, variants},
    },
  }) => getTextStyle({weight: weights.Regular, variant: variants.SEMI_BIG})}
`;
export const Grid = styled.View`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 40px 0px 80px 0px;
`;
export const CheckboxWrap = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;
export const Paragraph = styled.Text`
  flex-direction: row;
  gap: 30px;
  flex: 1;
  justify-content: space-between;
  color: ${({theme}: {theme?: any}) => theme.colors.black[900]};
  ${({
    theme: {
      typography: {getTextStyle, weights, variants},
    },
  }) => getTextStyle({weight: weights.Regular, variant: variants.BODY_SMALL})}
`;
export const Span = styled.Text`
  color: ${({theme}: {theme?: any}) => theme.colors.primary[900]};
`;
export const Checkbox = styled.Pressable<{$isChecked: boolean}>`
  width: 20px;
  height: 20px;
  border-radius: 8px;
  border-width: 1px;
  justify-content: center;
  align-items: center;
  border-color: ${({theme, $isChecked}: {theme?: any; $isChecked: any}) =>
    $isChecked ? theme.colors.primary[900] : theme.colors.gray[200]};
  background: ${({theme, $isChecked}: {theme?: any; $isChecked: any}) =>
    $isChecked ? theme.colors.primary[900] : theme.colors.white};
`;
export const LinkWrap = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 0px;
  text-align: center;
`;
export const LinkText = styled.Text`
  color: ${({theme}: {theme?: any}) => theme.colors.black[900]};
  ${({
    theme: {
      typography: {getTextStyle, variants},
    },
  }) => getTextStyle({variant: variants.BODY_MEDIUM})}
`;
export const Link = styled(LinkText)`
  line-height: 30px;
  color: ${({theme}: {theme?: any}) => theme.colors.primary[900]};
  ${({
    theme: {
      typography: {getTextStyle, weights, variants},
    },
  }) => getTextStyle({weight: weights.Bold, variant: variants.BODY_MEDIUM})}
`;
