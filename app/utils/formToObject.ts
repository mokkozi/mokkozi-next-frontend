export default function (form: HTMLFormElement) {
  const formData: { [key: string]: any } = {};

  for (let i = 0; i < form.elements.length; i++) {
    const element = form.elements[i] as HTMLInputElement;
    if (element.name && element.value) {
      formData[element.name] = element.value;
    }
  }

  return formData;
}
