/** @jsx jsx */

import type { CSSProperties } from 'react';

// eslint-disable-next-line @atlaskit/ui-styling-standard/use-compiled -- Ignored via go/DSP-18766
import { css, jsx } from '@emotion/react';

import type { Instruction } from '@atlaskit/pragmatic-drag-and-drop-hitbox/tree-item';
import { token } from '@atlaskit/tokens';

import { DropIndicator } from '../../src/tree-item';
import Layout from '../internal/layout';

const containerStyles = css({
	display: 'flex',
	flexDirection: 'column',
	gap: 8,
});

const data = {
	currentLevel: 2,
	indentPerLevel: 20,
};

const instructions: Instruction[] = [
	{
		type: 'reorder-above',
		...data,
	},
	{
		type: 'reorder-below',
		...data,
	},
	{
		type: 'make-child',
		...data,
	},
	{
		type: 'reparent',
		...data,
		desiredLevel: 1,
	},
	{
		type: 'reparent',
		...data,
		desiredLevel: 0,
	},
];

const blocked = instructions.map((instruction) => {
	if (instruction.type === 'instruction-blocked') {
		return instruction;
	}
	const updated: Instruction = {
		type: 'instruction-blocked',
		desired: instruction,
	};
	return updated;
});

const all: Instruction[] = [...instructions, ...blocked];

const itemStyles = css({
	display: 'flex',
	minWidth: 120,
	padding: 8,
	alignItems: 'center',
	gap: 4,
	borderRadius: 3,
	position: 'relative',
	paddingLeft: 'calc(var(--horizontal-indent) + 1ch)',
	background: token('elevation.surface.sunken', '#F7F8F9'),
});

function getLabel(instruction: Instruction): string {
	if (instruction.type === 'instruction-blocked') {
		return `[Blocked] ${getLabel(instruction.desired)}`;
	}
	if (instruction.type === 'reparent') {
		return `reparent (lvl${instruction.currentLevel} → lvl${instruction.desiredLevel})`;
	}
	return instruction.type;
}

function TreeItem({
	instruction,
	indentPerLevel,
	currentLevel,
}: {
	instruction: Instruction;
	indentPerLevel: number;
	currentLevel: number;
}) {
	return (
		<div
			css={itemStyles}
			// eslint-disable-next-line @atlaskit/ui-styling-standard/enforce-style-prop -- Ignored via go/DSP-18766
			style={
				{
					'--horizontal-indent': `${indentPerLevel * currentLevel}px`,
					// eslint-disable-next-line @atlaskit/ui-styling-standard/no-imported-style-values -- Ignored via go/DSP-18766
				} as CSSProperties
			}
		>
			<span>Instruction: </span>
			<code>
				<small>{getLabel(instruction)}</small>
			</code>
			<DropIndicator instruction={instruction} />
		</div>
	);
}

export default function Example() {
	return (
		<Layout testId="layout--appearance">
			<div css={containerStyles}>
				{all.map((instruction, index) => (
					<TreeItem instruction={instruction} key={index} {...data} />
				))}
			</div>
		</Layout>
	);
}
