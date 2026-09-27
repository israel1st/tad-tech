function LoadingButton({ loading, children, loadingText, ...props }) {
    return (
        <button disabled={loading} {...props}>
            {loading ? (loadingText || "Loading...") : children}
        </button>
    );
}

export default LoadingButton;