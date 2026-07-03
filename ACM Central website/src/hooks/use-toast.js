export function useToast() {
  const toast = ({ title, description }) => {
    const event = new CustomEvent('acm-toast', { detail: { title, description } });
    window.dispatchEvent(event);
  };
  return { toast };
}
