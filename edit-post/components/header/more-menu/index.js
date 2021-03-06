/**
 * WordPress dependencies
 */
import { __, _x } from '@wordpress/i18n';
import { IconButton, Dropdown, MenuGroup } from '@wordpress/components';
import { Fragment } from '@wordpress/element';

/**
 * Internal dependencies
 */
import './style.scss';
import ModeSwitcher from '../mode-switcher';
import FixedToolbarToggle from '../fixed-toolbar-toggle';
import PluginMoreMenuGroup from '../plugins-more-menu-group';
import TipsToggle from '../tips-toggle';
import KeyboardShortcutsHelpMenuItem from '../keyboard-shortcuts-help-menu-item';

const MoreMenu = () => (
	<Dropdown
		className="edit-post-more-menu"
		contentClassName="edit-post-more-menu__content"
		position="bottom left"
		renderToggle={ ( { isOpen, onToggle } ) => (
			<IconButton
				icon="ellipsis"
				label={ _x( 'More', 'button to expand options' ) }
				onClick={ onToggle }
				aria-expanded={ isOpen }
			/>
		) }
		renderContent={ ( { onClose } ) => (
			<Fragment>
				<ModeSwitcher onSelect={ onClose } />
				<MenuGroup
					label={ __( 'Settings' ) }
					filterName="editPost.MoreMenu.settings"
				>
					<FixedToolbarToggle onToggle={ onClose } />
					<TipsToggle onToggle={ onClose } />
				</MenuGroup>
				<PluginMoreMenuGroup.Slot fillProps={ { onClose } } />
				<MenuGroup
					label={ __( 'Tools' ) }
					filterName="editPost.MoreMenu.tools"
				>
					<KeyboardShortcutsHelpMenuItem onSelect={ onClose } />
				</MenuGroup>
			</Fragment>
		) }
	/>
);

export default MoreMenu;
