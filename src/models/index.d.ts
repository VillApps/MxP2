import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerViAUserEx = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ViAUserEx, 'id'>;
  };
  readonly id: string;
  readonly owner?: string | null;
  readonly ViAGroup?: (ViAUserExViAGroup | null)[] | null;
  readonly updatedAt?: string | null;
  readonly createdAt?: string | null;
}

type LazyViAUserEx = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ViAUserEx, 'id'>;
  };
  readonly id: string;
  readonly owner?: string | null;
  readonly ViAGroup: AsyncCollection<ViAUserExViAGroup>;
  readonly updatedAt?: string | null;
  readonly createdAt?: string | null;
}

export declare type ViAUserEx = LazyLoading extends LazyLoadingDisabled ? EagerViAUserEx : LazyViAUserEx

export declare const ViAUserEx: (new (init: ModelInit<ViAUserEx>) => ViAUserEx) & {
  copyOf(source: ViAUserEx, mutator: (draft: MutableModel<ViAUserEx>) => MutableModel<ViAUserEx> | void): ViAUserEx;
}

type EagerViAGroup = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ViAGroup, 'id'>;
  };
  readonly id: string;
  readonly owner?: string | null;
  readonly name?: string | null;
  readonly ViAUserEx?: (ViAUserExViAGroup | null)[] | null;
  readonly ViAView?: (ViAGroupViAView | null)[] | null;
  readonly ViAMenu?: (ViAGroupViAMenu | null)[] | null;
  readonly ViAMenuItem?: (ViAGroupViAMenuItem | null)[] | null;
  readonly updatedAt?: string | null;
  readonly createdAt?: string | null;
}

type LazyViAGroup = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ViAGroup, 'id'>;
  };
  readonly id: string;
  readonly owner?: string | null;
  readonly name?: string | null;
  readonly ViAUserEx: AsyncCollection<ViAUserExViAGroup>;
  readonly ViAView: AsyncCollection<ViAGroupViAView>;
  readonly ViAMenu: AsyncCollection<ViAGroupViAMenu>;
  readonly ViAMenuItem: AsyncCollection<ViAGroupViAMenuItem>;
  readonly updatedAt?: string | null;
  readonly createdAt?: string | null;
}

export declare type ViAGroup = LazyLoading extends LazyLoadingDisabled ? EagerViAGroup : LazyViAGroup

export declare const ViAGroup: (new (init: ModelInit<ViAGroup>) => ViAGroup) & {
  copyOf(source: ViAGroup, mutator: (draft: MutableModel<ViAGroup>) => MutableModel<ViAGroup> | void): ViAGroup;
}

type EagerViAView = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ViAView, 'id'>;
  };
  readonly id: string;
  readonly owner?: string | null;
  readonly name?: string | null;
  readonly ViAGroup?: (ViAGroupViAView | null)[] | null;
  readonly ViAMenu?: (ViAViewViAMenu | null)[] | null;
  readonly updatedAt?: string | null;
  readonly createdAt?: string | null;
}

type LazyViAView = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ViAView, 'id'>;
  };
  readonly id: string;
  readonly owner?: string | null;
  readonly name?: string | null;
  readonly ViAGroup: AsyncCollection<ViAGroupViAView>;
  readonly ViAMenu: AsyncCollection<ViAViewViAMenu>;
  readonly updatedAt?: string | null;
  readonly createdAt?: string | null;
}

export declare type ViAView = LazyLoading extends LazyLoadingDisabled ? EagerViAView : LazyViAView

export declare const ViAView: (new (init: ModelInit<ViAView>) => ViAView) & {
  copyOf(source: ViAView, mutator: (draft: MutableModel<ViAView>) => MutableModel<ViAView> | void): ViAView;
}

type EagerViAMenu = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ViAMenu, 'id'>;
  };
  readonly id: string;
  readonly owner?: string | null;
  readonly name?: string | null;
  readonly ViAGroup?: (ViAGroupViAMenu | null)[] | null;
  readonly ViAView?: (ViAViewViAMenu | null)[] | null;
  readonly ViAMenuItem?: (ViAMenuViAMenuItem | null)[] | null;
  readonly updatedAt?: string | null;
  readonly createdAt?: string | null;
}

type LazyViAMenu = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ViAMenu, 'id'>;
  };
  readonly id: string;
  readonly owner?: string | null;
  readonly name?: string | null;
  readonly ViAGroup: AsyncCollection<ViAGroupViAMenu>;
  readonly ViAView: AsyncCollection<ViAViewViAMenu>;
  readonly ViAMenuItem: AsyncCollection<ViAMenuViAMenuItem>;
  readonly updatedAt?: string | null;
  readonly createdAt?: string | null;
}

export declare type ViAMenu = LazyLoading extends LazyLoadingDisabled ? EagerViAMenu : LazyViAMenu

export declare const ViAMenu: (new (init: ModelInit<ViAMenu>) => ViAMenu) & {
  copyOf(source: ViAMenu, mutator: (draft: MutableModel<ViAMenu>) => MutableModel<ViAMenu> | void): ViAMenu;
}

type EagerViAMenuItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ViAMenuItem, 'id'>;
  };
  readonly id: string;
  readonly owner?: string | null;
  readonly name?: string | null;
  readonly url?: string | null;
  readonly orden?: number | null;
  readonly ViAGroup?: (ViAGroupViAMenuItem | null)[] | null;
  readonly ViAMenu?: (ViAMenuViAMenuItem | null)[] | null;
  readonly component?: string | null;
  readonly updatedAt?: string | null;
  readonly createdAt?: string | null;
}

type LazyViAMenuItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ViAMenuItem, 'id'>;
  };
  readonly id: string;
  readonly owner?: string | null;
  readonly name?: string | null;
  readonly url?: string | null;
  readonly orden?: number | null;
  readonly ViAGroup: AsyncCollection<ViAGroupViAMenuItem>;
  readonly ViAMenu: AsyncCollection<ViAMenuViAMenuItem>;
  readonly component?: string | null;
  readonly updatedAt?: string | null;
  readonly createdAt?: string | null;
}

export declare type ViAMenuItem = LazyLoading extends LazyLoadingDisabled ? EagerViAMenuItem : LazyViAMenuItem

export declare const ViAMenuItem: (new (init: ModelInit<ViAMenuItem>) => ViAMenuItem) & {
  copyOf(source: ViAMenuItem, mutator: (draft: MutableModel<ViAMenuItem>) => MutableModel<ViAMenuItem> | void): ViAMenuItem;
}

type EagerViAUserExViAGroup = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ViAUserExViAGroup, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly viAUserExId?: string | null;
  readonly viAGroupId?: string | null;
  readonly viAUserEx: ViAUserEx;
  readonly viAGroup: ViAGroup;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyViAUserExViAGroup = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ViAUserExViAGroup, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly viAUserExId?: string | null;
  readonly viAGroupId?: string | null;
  readonly viAUserEx: AsyncItem<ViAUserEx>;
  readonly viAGroup: AsyncItem<ViAGroup>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ViAUserExViAGroup = LazyLoading extends LazyLoadingDisabled ? EagerViAUserExViAGroup : LazyViAUserExViAGroup

export declare const ViAUserExViAGroup: (new (init: ModelInit<ViAUserExViAGroup>) => ViAUserExViAGroup) & {
  copyOf(source: ViAUserExViAGroup, mutator: (draft: MutableModel<ViAUserExViAGroup>) => MutableModel<ViAUserExViAGroup> | void): ViAUserExViAGroup;
}

type EagerViAGroupViAView = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ViAGroupViAView, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly viAGroupId?: string | null;
  readonly viAViewId?: string | null;
  readonly viAGroup: ViAGroup;
  readonly viAView: ViAView;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyViAGroupViAView = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ViAGroupViAView, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly viAGroupId?: string | null;
  readonly viAViewId?: string | null;
  readonly viAGroup: AsyncItem<ViAGroup>;
  readonly viAView: AsyncItem<ViAView>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ViAGroupViAView = LazyLoading extends LazyLoadingDisabled ? EagerViAGroupViAView : LazyViAGroupViAView

export declare const ViAGroupViAView: (new (init: ModelInit<ViAGroupViAView>) => ViAGroupViAView) & {
  copyOf(source: ViAGroupViAView, mutator: (draft: MutableModel<ViAGroupViAView>) => MutableModel<ViAGroupViAView> | void): ViAGroupViAView;
}

type EagerViAGroupViAMenu = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ViAGroupViAMenu, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly viAGroupId?: string | null;
  readonly viAMenuId?: string | null;
  readonly viAGroup: ViAGroup;
  readonly viAMenu: ViAMenu;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyViAGroupViAMenu = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ViAGroupViAMenu, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly viAGroupId?: string | null;
  readonly viAMenuId?: string | null;
  readonly viAGroup: AsyncItem<ViAGroup>;
  readonly viAMenu: AsyncItem<ViAMenu>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ViAGroupViAMenu = LazyLoading extends LazyLoadingDisabled ? EagerViAGroupViAMenu : LazyViAGroupViAMenu

export declare const ViAGroupViAMenu: (new (init: ModelInit<ViAGroupViAMenu>) => ViAGroupViAMenu) & {
  copyOf(source: ViAGroupViAMenu, mutator: (draft: MutableModel<ViAGroupViAMenu>) => MutableModel<ViAGroupViAMenu> | void): ViAGroupViAMenu;
}

type EagerViAGroupViAMenuItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ViAGroupViAMenuItem, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly viAGroupId?: string | null;
  readonly viAMenuItemId?: string | null;
  readonly viAGroup: ViAGroup;
  readonly viAMenuItem: ViAMenuItem;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyViAGroupViAMenuItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ViAGroupViAMenuItem, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly viAGroupId?: string | null;
  readonly viAMenuItemId?: string | null;
  readonly viAGroup: AsyncItem<ViAGroup>;
  readonly viAMenuItem: AsyncItem<ViAMenuItem>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ViAGroupViAMenuItem = LazyLoading extends LazyLoadingDisabled ? EagerViAGroupViAMenuItem : LazyViAGroupViAMenuItem

export declare const ViAGroupViAMenuItem: (new (init: ModelInit<ViAGroupViAMenuItem>) => ViAGroupViAMenuItem) & {
  copyOf(source: ViAGroupViAMenuItem, mutator: (draft: MutableModel<ViAGroupViAMenuItem>) => MutableModel<ViAGroupViAMenuItem> | void): ViAGroupViAMenuItem;
}

type EagerViAViewViAMenu = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ViAViewViAMenu, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly viAViewId?: string | null;
  readonly viAMenuId?: string | null;
  readonly viAView: ViAView;
  readonly viAMenu: ViAMenu;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyViAViewViAMenu = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ViAViewViAMenu, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly viAViewId?: string | null;
  readonly viAMenuId?: string | null;
  readonly viAView: AsyncItem<ViAView>;
  readonly viAMenu: AsyncItem<ViAMenu>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ViAViewViAMenu = LazyLoading extends LazyLoadingDisabled ? EagerViAViewViAMenu : LazyViAViewViAMenu

export declare const ViAViewViAMenu: (new (init: ModelInit<ViAViewViAMenu>) => ViAViewViAMenu) & {
  copyOf(source: ViAViewViAMenu, mutator: (draft: MutableModel<ViAViewViAMenu>) => MutableModel<ViAViewViAMenu> | void): ViAViewViAMenu;
}

type EagerViAMenuViAMenuItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ViAMenuViAMenuItem, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly viAMenuId?: string | null;
  readonly viAMenuItemId?: string | null;
  readonly viAMenu: ViAMenu;
  readonly viAMenuItem: ViAMenuItem;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyViAMenuViAMenuItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ViAMenuViAMenuItem, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly viAMenuId?: string | null;
  readonly viAMenuItemId?: string | null;
  readonly viAMenu: AsyncItem<ViAMenu>;
  readonly viAMenuItem: AsyncItem<ViAMenuItem>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ViAMenuViAMenuItem = LazyLoading extends LazyLoadingDisabled ? EagerViAMenuViAMenuItem : LazyViAMenuViAMenuItem

export declare const ViAMenuViAMenuItem: (new (init: ModelInit<ViAMenuViAMenuItem>) => ViAMenuViAMenuItem) & {
  copyOf(source: ViAMenuViAMenuItem, mutator: (draft: MutableModel<ViAMenuViAMenuItem>) => MutableModel<ViAMenuViAMenuItem> | void): ViAMenuViAMenuItem;
}