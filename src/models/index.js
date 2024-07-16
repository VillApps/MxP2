// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { ViAUserEx, ViAGroup, ViAView, ViAMenu, ViAMenuItem, ViAUserExViAGroup, ViAGroupViAView, ViAGroupViAMenu, ViAGroupViAMenuItem, ViAViewViAMenu, ViAMenuViAMenuItem } = initSchema(schema);

export {
  ViAUserEx,
  ViAGroup,
  ViAView,
  ViAMenu,
  ViAMenuItem,
  ViAUserExViAGroup,
  ViAGroupViAView,
  ViAGroupViAMenu,
  ViAGroupViAMenuItem,
  ViAViewViAMenu,
  ViAMenuViAMenuItem
};