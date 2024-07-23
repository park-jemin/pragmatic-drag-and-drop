/**
 * @jsxRuntime classic
 * @jsx jsx
 */

// eslint-disable-next-line @atlaskit/ui-styling-standard/use-compiled -- Ignored via go/DSP-18766
import { css, jsx } from '@emotion/react';

type Mode = 'standard' | 'alternative';

const styles: { [Key in Mode]: ReturnType<typeof css> } = {
	standard: css({
		'--line-color': '#4C0394',
		'--background-color': '#CF9FFF',
		'--circle-color': '#FF4245',
		'--tail-color': '#F7ED00',
		'--overlap-color': '#00EEAA',
	}),
	alternative: css({
		'--line-color': '#1631E7',
		'--background-color': '#7284FF',
		'--circle-color': '#00EEAA',
		'--tail-color': '#F7ED00',
		'--overlap-color': '#F64AB0',
	}),
};

export default function Logo({ mode }: { mode: Mode }) {
	return (
		<svg
			width="215"
			height="215"
			viewBox="0 0 215 215"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			css={styles[mode]}
		>
			<path
				d="M149.271 117.641C180.09 104.729 194.606 69.2789 181.694 38.4605C168.782 7.64212 133.332 -6.8741 102.514 6.03763C92.0751 10.411 83.5069 17.3701 77.2412 25.8591C71.5859 23.6547 65.1017 23.5572 59.0613 26.0879L44.2107 32.2357C31.855 37.4123 26.0352 51.6249 31.2117 63.9806L87.6911 198.788C92.8676 211.144 107.08 216.964 119.436 211.787L134.287 205.639C146.642 200.463 152.462 186.25 147.285 173.895L125.693 122.356C133.558 122.385 141.56 120.872 149.271 117.641Z"
				fill="var(--background-color)"
			/>
			<path
				d="M42.1329 61.0116C38.9324 53.3725 42.5306 44.5853 50.1698 41.3848L61.4138 36.6739C69.0529 33.4734 77.8401 37.0717 81.0406 44.7108L137.01 178.3C140.21 185.94 136.612 194.727 128.973 197.927L117.729 202.638C110.09 205.839 101.302 202.24 98.1019 194.601L42.1329 61.0116Z"
				fill="var(--tail-color)"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M144.391 109.334C170.156 98.5394 182.292 68.9014 171.498 43.1358C160.703 17.3702 131.065 5.23401 105.299 16.0288C79.5336 26.8236 67.3974 56.4616 78.1922 82.2272C88.987 107.993 118.625 120.129 144.391 109.334ZM129.616 73.8206C135.739 71.2551 138.624 64.2113 136.058 58.0878C133.493 51.9644 126.449 49.0801 120.326 51.6456C114.202 54.211 111.318 61.2548 113.883 67.3783C116.449 73.5018 123.493 76.3861 129.616 73.8206Z"
				fill="var(--circle-color)"
			/>
			<path
				d="M108.457 110.566L80.8532 44.6795C80.3234 43.4149 79.6405 42.261 78.835 41.2304C73.0095 53.704 72.2673 68.4962 78.0061 82.194C83.8436 96.127 95.1912 106.075 108.457 110.566Z"
				fill="var(--overlap-color)"
			/>
			<path
				d="M125.654 2.64514C126.384 2.64248 126.974 2.04819 126.972 1.31775C126.969 0.58732 126.375 -0.00265372 125.644 8.97767e-06C123.853 0.00653953 122.055 0.091455 120.255 0.256728C119.528 0.323526 118.992 0.967332 119.059 1.69471C119.126 2.42209 119.77 2.95759 120.497 2.89079C122.219 2.73265 123.94 2.65139 125.654 2.64514Z"
				fill="var(--line-color)"
			/>
			<path
				d="M131.035 0.216995C130.307 0.155668 129.667 0.695998 129.606 1.42386C129.545 2.15172 130.085 2.79148 130.813 2.8528C132.532 2.99769 134.241 3.21763 135.934 3.51068C136.653 3.63528 137.338 3.15283 137.462 2.4331C137.587 1.71337 137.105 1.0289 136.385 0.904302C134.617 0.598167 132.832 0.368377 131.035 0.216995Z"
				fill="var(--line-color)"
			/>
			<path
				d="M115.383 3.58816C116.102 3.45776 116.579 2.76943 116.449 2.05073C116.318 1.33202 115.63 0.855105 114.911 0.9855C113.154 1.30441 111.399 1.70194 109.652 2.17989C108.947 2.37264 108.532 3.10004 108.725 3.80459C108.918 4.50913 109.645 4.92403 110.35 4.73129C112.022 4.27378 113.701 3.89334 115.383 3.58816Z"
				fill="var(--line-color)"
			/>
			<path
				d="M141.654 2.05481C140.948 1.86811 140.224 2.28923 140.037 2.9954C139.851 3.70158 140.272 4.4254 140.978 4.61209C142.644 5.05253 144.289 5.56496 145.908 6.14738C146.596 6.39461 147.353 6.03784 147.6 5.35051C147.848 4.66319 147.491 3.90558 146.804 3.65835C145.112 3.05006 143.394 2.51485 141.654 2.05481Z"
				fill="var(--line-color)"
			/>
			<path
				d="M105.431 6.30953C106.117 6.05645 106.467 5.29583 106.214 4.61064C105.961 3.92544 105.2 3.57514 104.515 3.82822C103.675 4.13852 102.838 4.46824 102.004 4.81758C101.149 5.17586 100.306 5.55117 99.4752 5.94295C98.8146 6.25459 98.5317 7.04276 98.8433 7.70338C99.155 8.364 99.9431 8.64691 100.604 8.33527C101.399 7.96005 102.207 7.60053 103.026 7.25726C103.825 6.92255 104.627 6.60671 105.431 6.30953Z"
				fill="var(--line-color)"
			/>
			<path
				d="M151.795 5.70214C151.131 5.3963 150.346 5.6861 150.04 6.34942C149.734 7.01275 150.024 7.79841 150.687 8.10425C152.25 8.82476 153.782 9.61326 155.278 10.4677C155.913 10.8299 156.72 10.6093 157.083 9.97504C157.445 9.34073 157.224 8.5329 156.59 8.17069C155.027 7.2782 153.427 6.45465 151.795 5.70214Z"
				fill="var(--line-color)"
			/>
			<path
				d="M95.9165 10.8066C96.5468 10.4374 96.7585 9.62724 96.3894 8.99695C96.0202 8.36665 95.21 8.15496 94.5797 8.52411C92.9754 9.46373 91.426 10.4684 89.9336 11.5331C89.339 11.9574 89.2009 12.7833 89.6252 13.3779C90.0494 13.9725 90.8754 14.1107 91.47 13.6864C92.8981 12.6675 94.3809 11.706 95.9165 10.8066Z"
				fill="var(--line-color)"
			/>
			<path
				d="M161.153 11.0463C160.552 10.6303 159.728 10.7798 159.312 11.3803C158.896 11.9807 159.046 12.8046 159.646 13.2206C161.059 14.1989 162.431 15.2405 163.758 16.3432C164.32 16.81 165.154 16.733 165.62 16.1711C166.087 15.6093 166.01 14.7754 165.448 14.3087C164.061 13.1564 162.628 12.0683 161.153 11.0463Z"
				fill="var(--line-color)"
			/>
			<path
				d="M87.3007 16.9546C87.8546 16.4785 87.9177 15.6435 87.4416 15.0895C86.9655 14.5356 86.1305 14.4724 85.5765 14.9485C84.1702 16.1572 82.8257 17.4236 81.5452 18.7425C81.0364 19.2666 81.0488 20.1039 81.5729 20.6127C82.0969 21.1215 82.9342 21.1091 83.4431 20.5851C84.6684 19.323 85.955 18.1112 87.3007 16.9546Z"
				fill="var(--line-color)"
			/>
			<path
				d="M169.443 17.9348C168.924 17.4206 168.087 17.4243 167.573 17.9431C167.058 18.4619 167.062 19.2993 167.581 19.8135C168.799 21.0203 169.968 22.2849 171.084 23.6054C171.556 24.1632 172.391 24.233 172.948 23.7614C173.506 23.2898 173.576 22.4553 173.104 21.8975C171.937 20.5175 170.715 19.1959 169.443 17.9348Z"
				fill="var(--line-color)"
			/>
			<path
				d="M79.9274 24.5483C80.3871 23.9806 80.2996 23.1478 79.7319 22.6881C79.1643 22.2284 78.3314 22.316 77.8718 22.8836C77.4992 23.3437 77.1336 23.8087 76.7751 24.2785C76.3195 24.1212 75.8594 23.9767 75.3952 23.8451C74.6925 23.646 73.9613 24.0542 73.7621 24.757C73.563 25.4597 73.9712 26.1909 74.674 26.39C75.3811 26.5905 76.078 26.8245 76.7621 27.0912L77.7054 27.4588L78.3066 26.6443C78.8305 25.9345 79.3709 25.2356 79.9274 24.5483Z"
				fill="var(--line-color)"
			/>
			<path
				d="M70.5688 22.9652C68.949 22.8283 67.3061 22.8455 65.6615 23.0255C64.9354 23.105 64.4112 23.758 64.4907 24.4841C64.5702 25.2102 65.2233 25.7344 65.9494 25.6549C67.4224 25.4937 68.8944 25.4783 70.3462 25.6009C71.074 25.6624 71.7139 25.1222 71.7754 24.3944C71.8369 23.6665 71.2967 23.0266 70.5688 22.9652Z"
				fill="var(--line-color)"
			/>
			<path
				d="M61.6442 26.553C62.3416 26.3359 62.7309 25.5945 62.5137 24.8971C62.2966 24.1997 61.5552 23.8103 60.8577 24.0275C60.0844 24.2683 59.3158 24.5478 58.5542 24.8668L58.5514 24.8679L56.7003 25.6342C56.0254 25.9136 55.7048 26.6872 55.9842 27.3621C56.2636 28.037 57.0372 28.3576 57.7121 28.0782L59.5684 27.3097L59.5736 27.3076C60.2588 27.0205 60.9497 26.7693 61.6442 26.553Z"
				fill="var(--line-color)"
			/>
			<path
				d="M176.402 26.1649C175.981 25.5679 175.156 25.4251 174.559 25.8459C173.962 26.2668 173.819 27.0919 174.24 27.6889C175.225 29.0862 176.155 30.5352 177.027 32.0342C177.394 32.6658 178.203 32.8802 178.835 32.5132C179.466 32.1462 179.681 31.3367 179.314 30.7051C178.404 29.1391 177.432 27.6251 176.402 26.1649Z"
				fill="var(--line-color)"
			/>
			<path
				d="M53.9994 29.6152C54.6743 29.3358 54.9949 28.5622 54.7155 27.8873C54.4362 27.2124 53.6626 26.8918 52.9877 27.1711L49.275 28.7081C48.6001 28.9875 48.2795 29.7611 48.5589 30.436C48.8383 31.1109 49.6119 31.4315 50.2868 31.1521L53.9994 29.6152Z"
				fill="var(--line-color)"
			/>
			<path
				d="M46.5741 32.689C47.249 32.4097 47.5696 31.6361 47.2903 30.9612C47.0109 30.2863 46.2373 29.9656 45.5624 30.245L43.706 31.0135L43.7009 31.0157C42.9212 31.3423 42.1658 31.7033 41.4359 32.0962C40.7927 32.4423 40.552 33.2444 40.8981 33.8876C41.2443 34.5308 42.0464 34.7715 42.6896 34.4254C43.3433 34.0735 44.0204 33.7498 44.72 33.4566L44.723 33.4554L46.5741 32.689Z"
				fill="var(--line-color)"
			/>
			<path
				d="M38.9596 36.9343C39.5225 36.4689 39.6015 35.6352 39.136 35.0723C38.6706 34.5093 37.8369 34.4304 37.274 34.8958C35.9708 35.9734 34.7905 37.1686 33.7426 38.4583C33.282 39.0252 33.3682 39.8582 33.9351 40.3188C34.502 40.7794 35.335 40.6933 35.7956 40.1264C36.7348 38.9704 37.7923 37.8996 38.9596 36.9343Z"
				fill="var(--line-color)"
			/>
			<path
				d="M181.819 35.4828C181.508 34.8218 180.72 34.538 180.059 34.8489C179.398 35.1598 179.115 35.9477 179.425 36.6087C179.791 37.3848 180.141 38.1725 180.475 38.9714C180.81 39.7703 181.126 40.5723 181.423 41.3769C181.676 42.0621 182.437 42.4124 183.122 42.1593C183.807 41.9062 184.158 41.1456 183.904 40.4604C183.594 39.6203 183.264 38.7831 182.915 37.9492C182.566 37.1154 182.2 36.2932 181.819 35.4828Z"
				fill="var(--line-color)"
			/>
			<path
				d="M33.3157 43.8773C33.657 43.2316 33.4103 42.4314 32.7645 42.09C32.1187 41.7486 31.3185 41.9954 30.9772 42.6412C30.1945 44.1219 29.5579 45.6764 29.0773 47.2808C28.8677 47.9805 29.2651 48.7176 29.9648 48.9272C30.6645 49.1368 31.4016 48.7395 31.6112 48.0398C32.0424 46.6004 32.6135 45.2057 33.3157 43.8773Z"
				fill="var(--line-color)"
			/>
			<path
				d="M185.553 45.5971C185.36 44.8926 184.633 44.4777 183.928 44.6704C183.224 44.8631 182.809 45.5905 183.001 46.2951C183.459 47.9674 183.839 49.6468 184.145 51.3288C184.275 52.0476 184.963 52.5245 185.682 52.3941C186.401 52.2637 186.878 51.5753 186.747 50.8566C186.428 49.0989 186.031 47.3442 185.553 45.5971Z"
				fill="var(--line-color)"
			/>
			<path
				d="M30.7481 52.4528C30.8174 51.7257 30.2841 51.08 29.5569 51.0108C28.8298 50.9415 28.1842 51.4748 28.1149 52.2019C27.9573 53.8562 27.9603 55.5359 28.1334 57.2181C28.2082 57.9447 28.8579 58.4731 29.5845 58.3983C30.3111 58.3235 30.8395 57.6738 30.7647 56.9472C30.6096 55.4405 30.6068 53.9355 30.7481 52.4528Z"
				fill="var(--line-color)"
			/>
			<path
				d="M187.476 56.2005C187.409 55.4731 186.765 54.9376 186.038 55.0044C185.311 55.0712 184.775 55.715 184.842 56.4424C185 58.1644 185.081 59.8849 185.088 61.5993C185.09 62.3297 185.685 62.9197 186.415 62.917C187.145 62.9144 187.735 62.3201 187.733 61.5896C187.726 59.7981 187.641 58.0001 187.476 56.2005Z"
				fill="var(--line-color)"
			/>
			<path
				d="M31.6637 61.3517C31.4481 60.6538 30.7075 60.2629 30.0096 60.4786C29.3117 60.6943 28.9208 61.4348 29.1365 62.1327C29.3813 62.9247 29.6665 63.7117 29.9932 64.4914L31.0017 66.8987C31.284 67.5724 32.0589 67.8897 32.7326 67.6075C33.4063 67.3252 33.7237 66.5503 33.4414 65.8766L32.4328 63.4693C32.1393 62.7686 31.8833 62.062 31.6637 61.3517Z"
				fill="var(--line-color)"
			/>
			<path
				d="M187.516 66.9802C187.577 66.2524 187.037 65.6126 186.309 65.5513C185.581 65.49 184.941 66.0303 184.88 66.7581C184.735 68.4777 184.515 70.1863 184.222 71.879C184.097 72.5988 184.58 73.2832 185.3 73.4078C186.019 73.5324 186.704 73.05 186.828 72.3302C187.135 70.5619 187.364 68.7769 187.516 66.9802Z"
				fill="var(--line-color)"
			/>
			<path
				d="M35.4585 70.6911C35.1763 70.0174 34.4013 69.7001 33.7276 69.9824C33.0539 70.2646 32.7366 71.0396 33.0188 71.7133L35.036 76.5278C35.3182 77.2015 36.0932 77.5189 36.7669 77.2366C37.4406 76.9544 37.7579 76.1794 37.4756 75.5057L35.4585 70.6911Z"
				fill="var(--line-color)"
			/>
			<path
				d="M185.678 77.5995C185.865 76.8934 185.443 76.1695 184.737 75.9828C184.031 75.7962 183.307 76.2173 183.121 76.9234C182.68 78.5894 182.168 80.2344 181.585 81.8536C181.338 82.5409 181.695 83.2986 182.382 83.5458C183.07 83.793 183.827 83.4362 184.074 82.7489C184.683 81.0577 185.218 79.3396 185.678 77.5995Z"
				fill="var(--line-color)"
			/>
			<path
				d="M39.4928 80.3203C39.2105 79.6466 38.4355 79.3292 37.7618 79.6115C37.0881 79.8937 36.7708 80.6687 37.0531 81.3424L39.0702 86.157C39.3524 86.8307 40.1274 87.148 40.8011 86.8657C41.4748 86.5835 41.7921 85.8085 41.5099 85.1348L39.4928 80.3203Z"
				fill="var(--line-color)"
			/>
			<path
				d="M182.031 87.7401C182.336 87.0767 182.047 86.2911 181.383 85.9852C180.72 85.6794 179.934 85.9692 179.628 86.6325C178.908 88.1952 178.119 89.7272 177.265 91.2236C176.903 91.8579 177.123 92.6657 177.758 93.0279C178.392 93.3901 179.2 93.1695 179.562 92.5352C180.455 90.9723 181.278 89.3722 182.031 87.7401Z"
				fill="var(--line-color)"
			/>
			<path
				d="M43.527 89.9494C43.2447 89.2757 42.4698 88.9584 41.7961 89.2406C41.1224 89.5229 40.8051 90.2978 41.0873 90.9715L43.1044 95.7861C43.3867 96.4598 44.1616 96.7771 44.8353 96.4949C45.509 96.2126 45.8264 95.4377 45.5441 94.764L43.527 89.9494Z"
				fill="var(--line-color)"
			/>
			<path
				d="M176.686 97.0981C177.102 96.4977 176.953 95.6738 176.352 95.2578C175.752 94.8418 174.928 94.9913 174.512 95.5918C173.534 97.0039 172.492 98.376 171.389 99.7034C170.923 100.265 171 101.099 171.562 101.566C172.123 102.033 172.957 101.956 173.424 101.394C174.576 100.007 175.664 98.5733 176.686 97.0981Z"
				fill="var(--line-color)"
			/>
			<path
				d="M47.5612 99.5785C47.279 98.9048 46.504 98.5875 45.8303 98.8697C45.1566 99.152 44.8393 99.9269 45.1215 100.601L47.1387 105.415C47.4209 106.089 48.1959 106.406 48.8696 106.124C49.5433 105.842 49.8606 105.067 49.5783 104.393L47.5612 99.5785Z"
				fill="var(--line-color)"
			/>
			<path
				d="M169.798 105.388C170.312 104.87 170.308 104.032 169.79 103.518C169.271 103.004 168.433 103.007 167.919 103.526C166.712 104.744 165.448 105.913 164.127 107.03C163.57 107.501 163.5 108.336 163.971 108.894C164.443 109.452 165.277 109.521 165.835 109.05C167.215 107.883 168.537 106.661 169.798 105.388Z"
				fill="var(--line-color)"
			/>
			<path
				d="M51.5955 109.208C51.3132 108.534 50.5383 108.217 49.8646 108.499C49.1909 108.781 48.8735 109.556 49.1558 110.23L51.1729 115.044C51.4552 115.718 52.2301 116.035 52.9038 115.753C53.5775 115.471 53.8948 114.696 53.6126 114.022L51.5955 109.208Z"
				fill="var(--line-color)"
			/>
			<path
				d="M161.568 112.348C162.165 111.927 162.308 111.102 161.887 110.505C161.466 109.908 160.641 109.765 160.044 110.186C158.647 111.171 157.198 112.101 155.698 112.972C155.067 113.339 154.853 114.149 155.22 114.78C155.587 115.412 156.396 115.626 157.028 115.259C158.594 114.349 160.108 113.377 161.568 112.348Z"
				fill="var(--line-color)"
			/>
			<path
				d="M152.25 117.764C152.911 117.454 153.195 116.666 152.884 116.005C152.573 115.344 151.785 115.06 151.124 115.371C150.348 115.736 149.56 116.086 148.761 116.421C147.846 116.804 146.926 117.163 146.003 117.497C145.317 117.746 144.962 118.505 145.21 119.191C145.459 119.878 146.218 120.233 146.904 119.984C147.868 119.635 148.828 119.261 149.784 118.861C150.617 118.511 151.44 118.146 152.25 117.764Z"
				fill="var(--line-color)"
			/>
			<path
				d="M55.6297 118.837C55.3474 118.163 54.5725 117.846 53.8988 118.128C53.2251 118.41 52.9078 119.185 53.19 119.859L55.2071 124.673C55.4894 125.347 56.2643 125.664 56.938 125.382C57.6117 125.1 57.9291 124.325 57.6468 123.651L55.6297 118.837Z"
				fill="var(--line-color)"
			/>
			<path
				d="M140.995 121.798C141.704 121.619 142.132 120.9 141.953 120.192C141.774 119.484 141.054 119.055 140.346 119.234C138.418 119.722 136.483 120.109 134.545 120.396C133.823 120.504 133.324 121.176 133.431 121.899C133.539 122.621 134.211 123.12 134.934 123.013C136.958 122.712 138.981 122.308 140.995 121.798Z"
				fill="var(--line-color)"
			/>
			<path
				d="M128.78 123.612C129.51 123.578 130.074 122.959 130.04 122.229C130.006 121.499 129.387 120.936 128.657 120.97C127.669 121.016 126.683 121.037 125.699 121.033L123.703 121.025L125.554 125.444C125.836 126.117 126.611 126.435 127.285 126.152C127.958 125.87 128.276 125.095 127.993 124.421L127.672 123.653C128.041 123.643 128.411 123.629 128.78 123.612Z"
				fill="var(--line-color)"
			/>
			<path
				d="M59.6639 128.466C59.3817 127.792 58.6067 127.475 57.933 127.757C57.2593 128.039 56.942 128.814 57.2242 129.488L59.2414 134.303C59.5236 134.976 60.2986 135.294 60.9723 135.011C61.646 134.729 61.9633 133.954 61.681 133.28L59.6639 128.466Z"
				fill="var(--line-color)"
			/>
			<path
				d="M130.153 129.575C129.87 128.902 129.095 128.584 128.422 128.866C127.748 129.149 127.431 129.924 127.713 130.597L129.872 135.751C130.154 136.425 130.929 136.742 131.603 136.46C132.277 136.178 132.594 135.403 132.312 134.729L130.153 129.575Z"
				fill="var(--line-color)"
			/>
			<path
				d="M63.6982 138.095C63.4159 137.421 62.641 137.104 61.9673 137.386C61.2936 137.668 60.9762 138.443 61.2585 139.117L63.2756 143.932C63.5579 144.605 64.3328 144.923 65.0065 144.64C65.6802 144.358 65.9975 143.583 65.7153 142.91L63.6982 138.095Z"
				fill="var(--line-color)"
			/>
			<path
				d="M134.471 139.883C134.189 139.209 133.414 138.892 132.74 139.174C132.067 139.457 131.749 140.231 132.032 140.905L134.191 146.059C134.473 146.733 135.248 147.05 135.922 146.768C136.595 146.486 136.913 145.711 136.63 145.037L134.471 139.883Z"
				fill="var(--line-color)"
			/>
			<path
				d="M67.7324 147.724C67.4501 147.05 66.6752 146.733 66.0015 147.015C65.3278 147.298 65.0105 148.073 65.2927 148.746L67.3098 153.561C67.5921 154.235 68.367 154.552 69.0407 154.27C69.7144 153.987 70.0318 153.212 69.7495 152.539L67.7324 147.724Z"
				fill="var(--line-color)"
			/>
			<path
				d="M138.79 150.191C138.507 149.517 137.733 149.2 137.059 149.482C136.385 149.764 136.068 150.539 136.35 151.213L138.509 156.367C138.792 157.041 139.567 157.358 140.24 157.076C140.914 156.793 141.231 156.018 140.949 155.345L138.79 150.191Z"
				fill="var(--line-color)"
			/>
			<path
				d="M71.7666 157.353C71.4844 156.68 70.7094 156.362 70.0357 156.644C69.362 156.927 69.0447 157.702 69.327 158.375L71.3441 163.19C71.6263 163.864 72.4013 164.181 73.075 163.899C73.7487 163.616 74.066 162.842 73.7838 162.168L71.7666 157.353Z"
				fill="var(--line-color)"
			/>
			<path
				d="M143.108 160.499C142.826 159.825 142.051 159.508 141.377 159.79C140.704 160.072 140.386 160.847 140.669 161.521L142.828 166.675C143.11 167.348 143.885 167.666 144.559 167.383C145.233 167.101 145.55 166.326 145.268 165.652L143.108 160.499Z"
				fill="var(--line-color)"
			/>
			<path
				d="M75.8009 166.982C75.5186 166.309 74.7437 165.991 74.07 166.274C73.3963 166.556 73.0789 167.331 73.3612 168.005L75.3783 172.819C75.6606 173.493 76.4355 173.81 77.1092 173.528C77.7829 173.246 78.1002 172.471 77.818 171.797L75.8009 166.982Z"
				fill="var(--line-color)"
			/>
			<path
				d="M147.427 170.806C147.145 170.133 146.37 169.815 145.696 170.098C145.022 170.38 144.705 171.155 144.987 171.828L146.067 174.405C146.36 175.106 146.616 175.813 146.836 176.523C147.052 177.221 147.792 177.612 148.49 177.396C149.188 177.18 149.579 176.44 149.363 175.742C149.118 174.95 148.833 174.163 148.507 173.383L147.427 170.806Z"
				fill="var(--line-color)"
			/>
			<path
				d="M79.8351 176.611C79.5528 175.938 78.7779 175.62 78.1042 175.903C77.4305 176.185 77.1132 176.96 77.3954 177.634L79.4125 182.448C79.6948 183.122 80.4697 183.439 81.1434 183.157C81.8172 182.875 82.1345 182.1 81.8522 181.426L79.8351 176.611Z"
				fill="var(--line-color)"
			/>
			<path
				d="M150.366 180.657C150.291 179.93 149.642 179.402 148.915 179.476C148.189 179.551 147.66 180.201 147.735 180.927C147.89 182.434 147.893 183.939 147.752 185.422C147.682 186.149 148.216 186.795 148.943 186.864C149.67 186.933 150.316 186.4 150.385 185.673C150.542 184.019 150.539 182.339 150.366 180.657Z"
				fill="var(--line-color)"
			/>
			<path
				d="M83.8693 186.241C83.5871 185.567 82.8121 185.25 82.1384 185.532C81.4647 185.814 81.1474 186.589 81.4297 187.263L83.4468 192.077C83.729 192.751 84.504 193.068 85.1777 192.786C85.8514 192.504 86.1687 191.729 85.8865 191.055L83.8693 186.241Z"
				fill="var(--line-color)"
			/>
			<path
				d="M149.422 190.594C149.632 189.894 149.235 189.157 148.535 188.947C147.835 188.738 147.098 189.135 146.888 189.835C146.457 191.274 145.886 192.669 145.184 193.997C144.843 194.643 145.089 195.443 145.735 195.785C146.381 196.126 147.181 195.879 147.523 195.234C148.305 193.753 148.942 192.198 149.422 190.594Z"
				fill="var(--line-color)"
			/>
			<path
				d="M87.9036 195.87C87.6213 195.196 86.8464 194.879 86.1727 195.161C85.499 195.443 85.1816 196.218 85.4639 196.892L86.4724 199.299C86.7991 200.079 87.1601 200.834 87.5529 201.564C87.8991 202.207 88.7012 202.448 89.3444 202.102C89.9876 201.756 90.2283 200.954 89.8821 200.31C89.5298 199.656 89.2057 198.978 88.9121 198.277L87.9036 195.87Z"
				fill="var(--line-color)"
			/>
			<path
				d="M144.757 199.416C145.218 198.849 145.131 198.017 144.565 197.556C143.998 197.095 143.165 197.181 142.704 197.748C141.765 198.904 140.707 199.975 139.54 200.94C138.977 201.406 138.898 202.24 139.364 202.802C139.829 203.365 140.663 203.444 141.226 202.979C142.529 201.901 143.709 200.706 144.757 199.416Z"
				fill="var(--line-color)"
			/>
			<path
				d="M137.064 205.779C137.707 205.432 137.948 204.63 137.602 203.987C137.255 203.344 136.453 203.103 135.81 203.449C135.157 203.801 134.48 204.125 133.78 204.418L133.777 204.419L131.926 205.186C131.251 205.465 130.93 206.239 131.209 206.914C131.489 207.588 132.262 207.909 132.937 207.63L134.794 206.861L134.799 206.859C135.578 206.532 136.334 206.171 137.064 205.779Z"
				fill="var(--line-color)"
			/>
			<path
				d="M92.3911 204.04C91.9256 203.477 91.092 203.398 90.529 203.864C89.9661 204.329 89.8871 205.163 90.3526 205.726C91.4302 207.029 92.6254 208.209 93.9151 209.257C94.482 209.718 95.315 209.632 95.7756 209.065C96.2362 208.498 96.15 207.665 95.5831 207.204C94.4272 206.265 93.3564 205.208 92.3911 204.04Z"
				fill="var(--line-color)"
			/>
			<path
				d="M129.225 209.167C129.9 208.887 130.22 208.114 129.941 207.439C129.661 206.764 128.888 206.443 128.213 206.723L124.5 208.26C123.825 208.539 123.505 209.313 123.784 209.987C124.064 210.662 124.837 210.983 125.512 210.704L129.225 209.167Z"
				fill="var(--line-color)"
			/>
			<path
				d="M99.3341 209.684C98.6884 209.343 97.8881 209.59 97.5468 210.236C97.2054 210.881 97.4522 211.682 98.098 212.023C99.5787 212.806 101.133 213.442 102.738 213.923C103.437 214.132 104.174 213.735 104.384 213.035C104.594 212.336 104.196 211.598 103.497 211.389C102.057 210.958 100.663 210.387 99.3341 209.684Z"
				fill="var(--line-color)"
			/>
			<path
				d="M121.799 212.241C122.474 211.961 122.795 211.188 122.515 210.513C122.236 209.838 121.462 209.517 120.788 209.797L118.931 210.565L118.926 210.567C118.225 210.861 117.519 211.117 116.808 211.336C116.111 211.552 115.72 212.293 115.935 212.99C116.151 213.688 116.892 214.079 117.589 213.863C118.38 213.619 119.166 213.334 119.944 213.008L119.948 213.007L121.799 212.241Z"
				fill="var(--line-color)"
			/>
			<path
				d="M112.675 214.867C113.401 214.792 113.93 214.142 113.855 213.416C113.78 212.689 113.131 212.161 112.404 212.235C110.897 212.39 109.392 212.393 107.91 212.252C107.182 212.183 106.537 212.716 106.468 213.443C106.398 214.17 106.932 214.816 107.659 214.885C109.313 215.043 110.993 215.04 112.675 214.867Z"
				fill="var(--line-color)"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M131.161 77.5096C139.322 74.0905 143.166 64.703 139.747 56.5421C136.328 48.3812 126.94 44.5372 118.78 47.9563C110.619 51.3754 106.775 60.7629 110.194 68.9238C113.613 77.0848 123 80.9288 131.161 77.5096ZM129.616 73.8204C135.739 71.255 138.623 64.2112 136.058 58.0877C133.492 51.9643 126.449 49.08 120.325 51.6455C114.202 54.2109 111.317 61.2547 113.883 67.3782C116.448 73.5017 123.492 76.3859 129.616 73.8204Z"
				fill="var(--line-color)"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M79.0211 41.2628C74.9609 36.0674 67.7868 34.0039 61.4121 36.6746L50.1681 41.3855C42.529 44.586 38.9308 53.3732 42.1313 61.0123L98.1003 194.602C101.301 202.241 110.088 205.839 117.727 202.639L128.971 197.928C136.61 194.728 140.208 185.94 137.008 178.301L108.643 110.599C119.909 114.413 132.558 114.291 144.39 109.334C170.156 98.5393 182.292 68.9013 171.497 43.1357C160.702 17.3701 131.064 5.2339 105.299 16.0287C93.2313 21.0845 84.1535 30.2738 79.0211 41.2628ZM167.808 44.6813C177.749 68.4094 166.573 95.7038 142.845 105.645C130.734 110.719 117.695 110.292 106.508 105.503L81.4609 45.7186C85.8934 34.3856 94.7342 24.7916 106.844 19.7179C130.573 9.7767 157.867 20.9532 167.808 44.6813ZM81.881 80.6815C85.8518 90.1593 92.5914 97.6346 100.766 102.561L79.5304 51.8742C77.3086 61.1568 77.9101 71.2036 81.881 80.6815ZM76.9693 45.7875C76.9932 45.7198 77.0173 45.6522 77.0415 45.5846C74.4771 40.4479 68.3302 38.113 62.9577 40.3638L51.7137 45.0746C46.1121 47.4215 43.4736 53.8651 45.8205 59.4667L101.789 193.056C104.136 198.658 110.58 201.297 116.182 198.95L127.426 194.239C133.027 191.892 135.666 185.448 133.319 179.847L103.458 108.573C103.386 108.54 103.315 108.507 103.243 108.473C92.2528 103.341 83.0621 94.2628 78.0057 82.194C72.9515 70.1302 72.9242 57.2175 76.9693 45.7875Z"
				fill="var(--line-color)"
			/>
		</svg>
	);
}
