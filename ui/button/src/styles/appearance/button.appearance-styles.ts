import { createAppearanceStyles } from '@atls-ui-parts/button'

import { ifProp }                 from 'styled-tools'
import { switchProp }             from 'styled-tools'
import { prop }                   from 'styled-tools'

const appearancePrimaryDefaultStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.primary.default.font'),
  backgroundColor: prop('theme.colors.button.primary.default.background'),
  borderColor: prop('theme.colors.button.primary.default.border'),
})

const appearancePrimaryHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.primary.hover.font'),
  backgroundColor: prop('theme.colors.button.primary.hover.background'),
  borderColor: prop('theme.colors.button.primary.hover.border'),
})

const appearancePrimaryPressedStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.primary.pressed.font'),
  backgroundColor: prop('theme.colors.button.primary.pressed.background'),
  borderColor: prop('theme.colors.button.primary.pressed.border'),
})

const appearancePrimaryDisabledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.primary.disabled.font'),
  backgroundColor: prop('theme.colors.button.primary.disabled.background'),
  borderColor: prop('theme.colors.button.primary.disabled.border'),
})

const appearanceInversePrimaryDefaultStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.inversePrimary.default.font'),
  backgroundColor: prop('theme.colors.button.inversePrimary.default.background'),
  borderColor: prop('theme.colors.button.inversePrimary.default.border'),
})

const appearanceInversePrimaryHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.inversePrimary.hover.font'),
  backgroundColor: prop('theme.colors.button.inversePrimary.hover.background'),
  borderColor: prop('theme.colors.button.inversePrimary.hover.border'),
})

const appearanceInversePrimaryPressedStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.inversePrimary.pressed.font'),
  backgroundColor: prop('theme.colors.button.inversePrimary.pressed.background'),
  borderColor: prop('theme.colors.button.inversePrimary.pressed.border'),
})

const appearanceInversePrimaryDisabledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.inversePrimary.disabled.font'),
  backgroundColor: prop('theme.colors.button.inversePrimary.disabled.background'),
  borderColor: prop('theme.colors.button.inversePrimary.disabled.border'),
})

const appearanceSecondaryDefaultStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.secondary.default.font'),
  backgroundColor: prop('theme.colors.button.secondary.default.background'),
  borderColor: prop('theme.colors.button.secondary.default.border'),
})

const appearanceSecondaryHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.secondary.hover.font'),
  backgroundColor: prop('theme.colors.button.secondary.hover.background'),
  borderColor: prop('theme.colors.button.secondary.hover.border'),
})

const appearanceSecondaryPressedStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.secondary.pressed.font'),
  backgroundColor: prop('theme.colors.button.secondary.pressed.background'),
  borderColor: prop('theme.colors.button.secondary.pressed.border'),
})

const appearanceSecondaryDisabledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.secondary.disabled.font'),
  backgroundColor: prop('theme.colors.button.secondary.disabled.background'),
  borderColor: prop('theme.colors.button.secondary.disabled.border'),
})

const appearanceSecondaryInverseDefaultStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.secondaryInverse.default.font'),
  backgroundColor: prop('theme.colors.button.secondaryInverse.default.background'),
  borderColor: prop('theme.colors.button.secondaryInverse.default.border'),
})

const appearanceSecondaryInverseHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.secondaryInverse.hover.font'),
  backgroundColor: prop('theme.colors.button.secondaryInverse.hover.background'),
  borderColor: prop('theme.colors.button.secondaryInverse.hover.border'),
})

const appearanceSecondaryInversePressedStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.secondaryInverse.pressed.font'),
  backgroundColor: prop('theme.colors.button.secondaryInverse.pressed.background'),
  borderColor: prop('theme.colors.button.secondaryInverse.pressed.border'),
})

const appearanceSecondaryInverseDisabledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.secondaryInverse.disabled.font'),
  backgroundColor: prop('theme.colors.button.secondaryInverse.disabled.background'),
  borderColor: prop('theme.colors.button.secondaryInverse.disabled.border'),
})

const appearanceTertiaryDefaultStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.tertiary.default.font'),
  backgroundColor: prop('theme.colors.button.tertiary.default.background'),
  borderColor: prop('theme.colors.button.tertiary.default.border'),
})

const appearanceTertiaryHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.tertiary.hover.font'),
  backgroundColor: prop('theme.colors.button.tertiary.hover.background'),
  borderColor: prop('theme.colors.button.tertiary.hover.border'),
})

const appearanceTertiaryPressedStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.tertiary.pressed.font'),
  backgroundColor: prop('theme.colors.button.tertiary.pressed.background'),
  borderColor: prop('theme.colors.button.tertiary.pressed.border'),
})

const appearanceTertiaryDisabledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.tertiary.disabled.font'),
  backgroundColor: prop('theme.colors.button.tertiary.disabled.background'),
  borderColor: prop('theme.colors.button.tertiary.disabled.border'),
})

const appearanceUpDefaultStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.up.default.font'),
  backgroundColor: prop('theme.colors.button.up.default.background'),
  borderColor: prop('theme.colors.button.up.default.border'),
})

const appearanceUpHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.up.hover.font'),
  backgroundColor: prop('theme.colors.button.up.hover.background'),
  borderColor: prop('theme.colors.button.up.hover.border'),
})

const appearanceUpPressedStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.up.pressed.font'),
  backgroundColor: prop('theme.colors.button.up.pressed.background'),
  borderColor: prop('theme.colors.button.up.pressed.border'),
})

const appearanceUpDisabledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.up.disabled.font'),
  backgroundColor: prop('theme.colors.button.up.disabled.background'),
  borderColor: prop('theme.colors.button.up.disabled.border'),
})

const appearanceGrebeDefaultStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.grebe.default.font'),
  backgroundColor: prop('theme.colors.button.grebe.default.background'),
  borderColor: prop('theme.colors.button.grebe.default.border'),
})

const appearanceGrebeHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.grebe.hover.font'),
  backgroundColor: prop('theme.colors.button.grebe.hover.background'),
  borderColor: prop('theme.colors.button.grebe.hover.border'),
})

const appearanceGrebePressedStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.grebe.pressed.font'),
  backgroundColor: prop('theme.colors.button.grebe.pressed.background'),
  borderColor: prop('theme.colors.button.grebe.pressed.border'),
})

const appearanceGrebeDisabledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.grebe.disabled.font'),
  backgroundColor: prop('theme.colors.button.grebe.disabled.background'),
  borderColor: prop('theme.colors.button.grebe.disabled.border'),
})

const appearanceGrebeSecondaryDefaultStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.grebeSecondary.default.font'),
  backgroundColor: prop('theme.colors.button.grebeSecondary.default.background'),
  borderColor: prop('theme.colors.button.grebeSecondary.default.border'),
})

const appearanceGrebeSecondaryHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.grebeSecondary.hover.font'),
  backgroundColor: prop('theme.colors.button.grebeSecondary.hover.background'),
  borderColor: prop('theme.colors.button.grebeSecondary.hover.border'),
})

const appearanceGrebeSecondaryPressedStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.grebeSecondary.pressed.font'),
  backgroundColor: prop('theme.colors.button.grebeSecondary.pressed.background'),
  borderColor: prop('theme.colors.button.grebeSecondary.pressed.border'),
})

const appearanceGrebeSecondaryDisabledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.grebeSecondary.disabled.font'),
  backgroundColor: prop('theme.colors.button.grebeSecondary.disabled.background'),
  borderColor: prop('theme.colors.button.grebeSecondary.disabled.border'),
})

const appearanceTortoiseDefaultStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.tortoise.default.font'),
  backgroundColor: prop('theme.colors.button.tortoise.default.background'),
  borderColor: prop('theme.colors.button.tortoise.default.border'),
})

const appearanceTortoiseHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.tortoise.hover.font'),
  backgroundColor: prop('theme.colors.button.tortoise.hover.background'),
  borderColor: prop('theme.colors.button.tortoise.hover.border'),
})

const appearanceTortoisePressedStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.tortoise.pressed.font'),
  backgroundColor: prop('theme.colors.button.tortoise.pressed.background'),
  borderColor: prop('theme.colors.button.tortoise.pressed.border'),
})

const appearanceTortoiseDisabledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.tortoise.disabled.font'),
  backgroundColor: prop('theme.colors.button.tortoise.disabled.background'),
  borderColor: prop('theme.colors.button.tortoise.disabled.border'),
})

const appearanceCornerDefaultStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.corner.default.font'),
  backgroundColor: prop('theme.colors.button.corner.default.background'),
  borderColor: prop('theme.colors.button.corner.default.border'),
})

const appearanceCornerHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.corner.hover.font'),
  backgroundColor: prop('theme.colors.button.corner.hover.background'),
  borderColor: prop('theme.colors.button.corner.hover.border'),
})

const appearanceCornerPressedStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.corner.pressed.font'),
  backgroundColor: prop('theme.colors.button.corner.pressed.background'),
  borderColor: prop('theme.colors.button.corner.pressed.border'),
})

const appearanceCornerDisabledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.corner.disabled.font'),
  backgroundColor: prop('theme.colors.button.corner.disabled.background'),
  borderColor: prop('theme.colors.button.corner.disabled.border'),
})

const appearanceReplyDefaultStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.reply.default.font'),
  backgroundColor: prop('theme.colors.button.reply.default.background'),
  borderColor: prop('theme.colors.button.reply.default.border'),
})

const appearanceReplyHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.reply.hover.font'),
  backgroundColor: prop('theme.colors.button.reply.hover.background'),
  borderColor: prop('theme.colors.button.reply.hover.border'),
})

const appearanceReplyPressedStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.reply.pressed.font'),
  backgroundColor: prop('theme.colors.button.reply.pressed.background'),
  borderColor: prop('theme.colors.button.reply.pressed.border'),
})

const appearanceReplyDisabledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.reply.disabled.font'),
  backgroundColor: prop('theme.colors.button.reply.disabled.background'),
  borderColor: prop('theme.colors.button.reply.disabled.border'),
})

const appearanceLogoutDefaultStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.logout.default.font'),
  backgroundColor: prop('theme.colors.button.logout.default.background'),
  borderColor: prop('theme.colors.button.logout.default.border'),
})

const appearanceLogoutHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.logout.hover.font'),
  backgroundColor: prop('theme.colors.button.logout.hover.background'),
  borderColor: prop('theme.colors.button.logout.hover.border'),
})

const appearanceLogoutPressedStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.logout.pressed.font'),
  backgroundColor: prop('theme.colors.button.logout.pressed.background'),
  borderColor: prop('theme.colors.button.logout.pressed.border'),
})

const appearanceLogoutDisabledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.logout.disabled.font'),
  backgroundColor: prop('theme.colors.button.logout.disabled.background'),
  borderColor: prop('theme.colors.button.logout.disabled.border'),
})

const appearanceSortingDefaultStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.sorting.default.font'),
  backgroundColor: prop('theme.colors.button.sorting.default.background'),
  borderColor: prop('theme.colors.button.sorting.default.border'),
})

const appearanceSortingHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.sorting.hover.font'),
  backgroundColor: prop('theme.colors.button.sorting.hover.background'),
  borderColor: prop('theme.colors.button.sorting.hover.border'),
})

const appearanceSortingPressedStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.sorting.pressed.font'),
  backgroundColor: prop('theme.colors.button.sorting.pressed.background'),
  borderColor: prop('theme.colors.button.sorting.pressed.border'),
})

const appearanceSortingDisabledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.sorting.disabled.font'),
  backgroundColor: prop('theme.colors.button.sorting.disabled.background'),
  borderColor: prop('theme.colors.button.sorting.disabled.border'),
})

const appearancePlayDefaultStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.play.default.font'),
  backgroundColor: prop('theme.colors.button.play.default.background'),
  borderColor: prop('theme.colors.button.play.default.border'),
})

const appearancePlayHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.play.hover.font'),
  backgroundColor: prop('theme.colors.button.play.hover.background'),
  borderColor: prop('theme.colors.button.play.hover.border'),
})

const appearancePlayPressedStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.play.pressed.font'),
  backgroundColor: prop('theme.colors.button.play.pressed.background'),
  borderColor: prop('theme.colors.button.play.pressed.border'),
})

const appearancePlayDisabledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.play.disabled.font'),
  backgroundColor: prop('theme.colors.button.play.disabled.background'),
  borderColor: prop('theme.colors.button.play.disabled.border'),
})

const appearanceHeronDefaultStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.heron.default.font'),
  backgroundColor: prop('theme.colors.button.heron.default.background'),
  borderColor: prop('theme.colors.button.heron.default.border'),
})

const appearanceHeronHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.heron.hover.font'),
  backgroundColor: prop('theme.colors.button.heron.hover.background'),
  borderColor: prop('theme.colors.button.heron.hover.border'),
})

const appearanceHeronPressedStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.heron.pressed.font'),
  backgroundColor: prop('theme.colors.button.heron.pressed.background'),
  borderColor: prop('theme.colors.button.heron.pressed.border'),
})

const appearanceHeronDisabledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.heron.disabled.font'),
  backgroundColor: prop('theme.colors.button.heron.disabled.background'),
  borderColor: prop('theme.colors.button.heron.disabled.border'),
})

const appearanceEditDefaultStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.edit.default.font'),
  backgroundColor: prop('theme.colors.button.edit.default.background'),
  borderColor: prop('theme.colors.button.edit.default.border'),
})

const appearanceEditHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.edit.hover.font'),
  backgroundColor: prop('theme.colors.button.edit.hover.background'),
  borderColor: prop('theme.colors.button.edit.hover.border'),
})

const appearanceEditPressedStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.edit.pressed.font'),
  backgroundColor: prop('theme.colors.button.edit.pressed.background'),
  borderColor: prop('theme.colors.button.edit.pressed.border'),
})

const appearanceEditDisabledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.edit.disabled.font'),
  backgroundColor: prop('theme.colors.button.edit.disabled.background'),
  borderColor: prop('theme.colors.button.edit.disabled.border'),
})

const appearanceCloseDefaultStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.close.default.font'),
  backgroundColor: prop('theme.colors.button.close.default.background'),
  borderColor: prop('theme.colors.button.close.default.border'),
})

const appearanceCloseHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.close.hover.font'),
  backgroundColor: prop('theme.colors.button.close.hover.background'),
  borderColor: prop('theme.colors.button.close.hover.border'),
})

const appearanceClosePressedStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.close.pressed.font'),
  backgroundColor: prop('theme.colors.button.close.pressed.background'),
  borderColor: prop('theme.colors.button.close.pressed.border'),
})

const appearanceCloseDisabledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.close.disabled.font'),
  backgroundColor: prop('theme.colors.button.close.disabled.background'),
  borderColor: prop('theme.colors.button.close.disabled.border'),
})

const appearanceCloseSearchDefaultStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.closeSearch.default.font'),
  backgroundColor: prop('theme.colors.button.closeSearch.default.background'),
  borderColor: prop('theme.colors.button.closeSearch.default.border'),
})

const appearanceCloseSearchHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.closeSearch.hover.font'),
  backgroundColor: prop('theme.colors.button.closeSearch.hover.background'),
  borderColor: prop('theme.colors.button.closeSearch.hover.border'),
})

const appearanceCloseSearchPressedStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.closeSearch.pressed.font'),
  backgroundColor: prop('theme.colors.button.closeSearch.pressed.background'),
  borderColor: prop('theme.colors.button.closeSearch.pressed.border'),
})

const appearanceCloseSearchDisabledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.closeSearch.disabled.font'),
  backgroundColor: prop('theme.colors.button.closeSearch.disabled.background'),
  borderColor: prop('theme.colors.button.closeSearch.disabled.border'),
})

const appearanceMapNavDefaultStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.mapNav.default.font'),
  backgroundColor: prop('theme.colors.button.mapNav.default.background'),
  borderColor: prop('theme.colors.button.mapNav.default.border'),
})

const appearanceMapNavHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.mapNav.hover.font'),
  backgroundColor: prop('theme.colors.button.mapNav.hover.background'),
  borderColor: prop('theme.colors.button.mapNav.hover.border'),
})

const appearanceMapNavPressedStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.mapNav.pressed.font'),
  backgroundColor: prop('theme.colors.button.mapNav.pressed.background'),
  borderColor: prop('theme.colors.button.mapNav.pressed.border'),
})

const appearanceMapNavDisabledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.mapNav.disabled.font'),
  backgroundColor: prop('theme.colors.button.mapNav.disabled.background'),
  borderColor: prop('theme.colors.button.mapNav.disabled.border'),
})

const appearanceArrowFillDefaultStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.arrowFill.default.font'),
  backgroundColor: prop('theme.colors.button.arrowFill.default.background'),
  borderColor: prop('theme.colors.button.arrowFill.default.border'),
})

const appearanceArrowFillHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.arrowFill.hover.font'),
  backgroundColor: prop('theme.colors.button.arrowFill.hover.background'),
  borderColor: prop('theme.colors.button.arrowFill.hover.border'),
})

const appearanceArrowFillPressedStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.arrowFill.pressed.font'),
  backgroundColor: prop('theme.colors.button.arrowFill.pressed.background'),
  borderColor: prop('theme.colors.button.arrowFill.pressed.border'),
})

const appearanceArrowFillDisabledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.arrowFill.disabled.font'),
  backgroundColor: prop('theme.colors.button.arrowFill.disabled.background'),
  borderColor: prop('theme.colors.button.arrowFill.disabled.border'),
})

const appearanceArrowBlurDefaultStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.arrowBlur.default.font'),
  backgroundColor: prop('theme.colors.button.arrowBlur.default.background'),
  borderColor: prop('theme.colors.button.arrowBlur.default.border'),
})

const appearanceArrowBlurHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.arrowBlur.hover.font'),
  backgroundColor: prop('theme.colors.button.arrowBlur.hover.background'),
  borderColor: prop('theme.colors.button.arrowBlur.hover.border'),
})

const appearanceArrowBlurPressedStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.arrowBlur.pressed.font'),
  backgroundColor: prop('theme.colors.button.arrowBlur.pressed.background'),
  borderColor: prop('theme.colors.button.arrowBlur.pressed.border'),
})

const appearanceArrowBlurDisabledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.arrowBlur.disabled.font'),
  backgroundColor: prop('theme.colors.button.arrowBlur.disabled.background'),
  borderColor: prop('theme.colors.button.arrowBlur.disabled.border'),
})

const appearanceSocialNavDefaultStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.socialNav.default.font'),
  backgroundColor: prop('theme.colors.button.socialNav.default.background'),
  borderColor: prop('theme.colors.button.socialNav.default.border'),
})

const appearanceSocialNavHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.socialNav.hover.font'),
  backgroundColor: prop('theme.colors.button.socialNav.hover.background'),
  borderColor: prop('theme.colors.button.socialNav.hover.border'),
})

const appearanceSocialNavPressedStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.socialNav.pressed.font'),
  backgroundColor: prop('theme.colors.button.socialNav.pressed.background'),
  borderColor: prop('theme.colors.button.socialNav.pressed.border'),
})

const appearanceSocialNavDisabledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.socialNav.disabled.font'),
  backgroundColor: prop('theme.colors.button.socialNav.disabled.background'),
  borderColor: prop('theme.colors.button.socialNav.disabled.border'),
})

const appearanceSocialDefaultStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.social.default.font'),
  backgroundColor: prop('theme.colors.button.social.default.background'),
  borderColor: prop('theme.colors.button.social.default.border'),
})

const appearanceSocialHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.social.hover.font'),
  backgroundColor: prop('theme.colors.button.social.hover.background'),
  borderColor: prop('theme.colors.button.social.hover.border'),
})

const appearanceSocialPressedStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.social.pressed.font'),
  backgroundColor: prop('theme.colors.button.social.pressed.background'),
  borderColor: prop('theme.colors.button.social.pressed.border'),
})

const appearanceSocialDisabledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.social.disabled.font'),
  backgroundColor: prop('theme.colors.button.social.disabled.background'),
  borderColor: prop('theme.colors.button.social.disabled.border'),
})

const appearanceStyles = switchProp(prop('variant', 'primary'), {
  primary: ifProp(
    prop('disabled', false),
    appearancePrimaryDisabledStyles,
    ifProp(
      prop('pressed', false),
      appearancePrimaryPressedStyles,
      ifProp(prop('hover', false), appearancePrimaryHoverStyles, appearancePrimaryDefaultStyles)
    )
  ),
  inversePrimary: ifProp(
    prop('disabled', false),
    appearanceInversePrimaryDisabledStyles,
    ifProp(
      prop('pressed', false),
      appearanceInversePrimaryPressedStyles,
      ifProp(
        prop('hover', false),
        appearanceInversePrimaryHoverStyles,
        appearanceInversePrimaryDefaultStyles
      )
    )
  ),
  secondary: ifProp(
    prop('disabled', false),
    appearanceSecondaryDisabledStyles,
    ifProp(
      prop('pressed', false),
      appearanceSecondaryPressedStyles,
      ifProp(prop('hover', false), appearanceSecondaryHoverStyles, appearanceSecondaryDefaultStyles)
    )
  ),
  secondaryInverse: ifProp(
    prop('disabled', false),
    appearanceSecondaryInverseDisabledStyles,
    ifProp(
      prop('pressed', false),
      appearanceSecondaryInversePressedStyles,
      ifProp(
        prop('hover', false),
        appearanceSecondaryInverseHoverStyles,
        appearanceSecondaryInverseDefaultStyles
      )
    )
  ),
  tertiary: ifProp(
    prop('disabled', false),
    appearanceTertiaryDisabledStyles,
    ifProp(
      prop('pressed', false),
      appearanceTertiaryPressedStyles,
      ifProp(prop('hover', false), appearanceTertiaryHoverStyles, appearanceTertiaryDefaultStyles)
    )
  ),
  up: ifProp(
    prop('disabled', false),
    appearanceUpDisabledStyles,
    ifProp(
      prop('pressed', false),
      appearanceUpPressedStyles,
      ifProp(prop('hover', false), appearanceUpHoverStyles, appearanceUpDefaultStyles)
    )
  ),
  grebe: ifProp(
    prop('disabled', false),
    appearanceGrebeDisabledStyles,
    ifProp(
      prop('pressed', false),
      appearanceGrebePressedStyles,
      ifProp(prop('hover', false), appearanceGrebeHoverStyles, appearanceGrebeDefaultStyles)
    )
  ),
  grebeSecondary: ifProp(
    prop('disabled', false),
    appearanceGrebeSecondaryDisabledStyles,
    ifProp(
      prop('pressed', false),
      appearanceGrebeSecondaryPressedStyles,
      ifProp(
        prop('hover', false),
        appearanceGrebeSecondaryHoverStyles,
        appearanceGrebeSecondaryDefaultStyles
      )
    )
  ),
  tortoise: ifProp(
    prop('disabled', false),
    appearanceTortoiseDisabledStyles,
    ifProp(
      prop('pressed', false),
      appearanceTortoisePressedStyles,
      ifProp(prop('hover', false), appearanceTortoiseHoverStyles, appearanceTortoiseDefaultStyles)
    )
  ),
  corner: ifProp(
    prop('disabled', false),
    appearanceCornerDisabledStyles,
    ifProp(
      prop('pressed', false),
      appearanceCornerPressedStyles,
      ifProp(prop('hover', false), appearanceCornerHoverStyles, appearanceCornerDefaultStyles)
    )
  ),
  reply: ifProp(
    prop('disabled', false),
    appearanceReplyDisabledStyles,
    ifProp(
      prop('pressed', false),
      appearanceReplyPressedStyles,
      ifProp(prop('hover', false), appearanceReplyHoverStyles, appearanceReplyDefaultStyles)
    )
  ),
  logout: ifProp(
    prop('disabled', false),
    appearanceLogoutDisabledStyles,
    ifProp(
      prop('pressed', false),
      appearanceLogoutPressedStyles,
      ifProp(prop('hover', false), appearanceLogoutHoverStyles, appearanceLogoutDefaultStyles)
    )
  ),
  sorting: ifProp(
    prop('disabled', false),
    appearanceSortingDisabledStyles,
    ifProp(
      prop('pressed', false),
      appearanceSortingPressedStyles,
      ifProp(prop('hover', false), appearanceSortingHoverStyles, appearanceSortingDefaultStyles)
    )
  ),
  play: ifProp(
    prop('disabled', false),
    appearancePlayDisabledStyles,
    ifProp(
      prop('pressed', false),
      appearancePlayPressedStyles,
      ifProp(prop('hover', false), appearancePlayHoverStyles, appearancePlayDefaultStyles)
    )
  ),
  heron: ifProp(
    prop('disabled', false),
    appearanceHeronDisabledStyles,
    ifProp(
      prop('pressed', false),
      appearanceHeronPressedStyles,
      ifProp(prop('hover', false), appearanceHeronHoverStyles, appearanceHeronDefaultStyles)
    )
  ),
  edit: ifProp(
    prop('disabled', false),
    appearanceEditDisabledStyles,
    ifProp(
      prop('pressed', false),
      appearanceEditPressedStyles,
      ifProp(prop('hover', false), appearanceEditHoverStyles, appearanceEditDefaultStyles)
    )
  ),
  close: ifProp(
    prop('disabled', false),
    appearanceCloseDisabledStyles,
    ifProp(
      prop('pressed', false),
      appearanceClosePressedStyles,
      ifProp(prop('hover', false), appearanceCloseHoverStyles, appearanceCloseDefaultStyles)
    )
  ),
  closeSearch: ifProp(
    prop('disabled', false),
    appearanceCloseSearchDisabledStyles,
    ifProp(
      prop('pressed', false),
      appearanceCloseSearchPressedStyles,
      ifProp(
        prop('hover', false),
        appearanceCloseSearchHoverStyles,
        appearanceCloseSearchDefaultStyles
      )
    )
  ),
  mapNav: ifProp(
    prop('disabled', false),
    appearanceMapNavDisabledStyles,
    ifProp(
      prop('pressed', false),
      appearanceMapNavPressedStyles,
      ifProp(prop('hover', false), appearanceMapNavHoverStyles, appearanceMapNavDefaultStyles)
    )
  ),
  arrowFill: ifProp(
    prop('disabled', false),
    appearanceArrowFillDisabledStyles,
    ifProp(
      prop('pressed', false),
      appearanceArrowFillPressedStyles,
      ifProp(prop('hover', false), appearanceArrowFillHoverStyles, appearanceArrowFillDefaultStyles)
    )
  ),
  arrowBlur: ifProp(
    prop('disabled', false),
    appearanceArrowBlurDisabledStyles,
    ifProp(
      prop('pressed', false),
      appearanceArrowBlurPressedStyles,
      ifProp(prop('hover', false), appearanceArrowBlurHoverStyles, appearanceArrowBlurDefaultStyles)
    )
  ),
  socialNav: ifProp(
    prop('disabled', false),
    appearanceSocialNavDisabledStyles,
    ifProp(
      prop('pressed', false),
      appearanceSocialNavPressedStyles,
      ifProp(prop('hover', false), appearanceSocialNavHoverStyles, appearanceSocialNavDefaultStyles)
    )
  ),
  social: ifProp(
    prop('disabled', false),
    appearanceSocialDisabledStyles,
    ifProp(
      prop('pressed', false),
      appearanceSocialPressedStyles,
      ifProp(prop('hover', false), appearanceSocialHoverStyles, appearanceSocialDefaultStyles)
    )
  ),
})

export { appearanceStyles }
