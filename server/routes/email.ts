import nodemailer from 'nodemailer';
import {
  ContactFormType,
  ServerErrors,
} from '../../types/default';
import defaultContent from '../../content/default.json';
import {
  validateName,
  validateEmail,
  validateCompany,
  validatePhone,
  validateMessage,
} from '../../utils/validateForm';

const serverErrors = defaultContent.serverErrors as ServerErrors;

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    
    validateBody(body);

    await sendEmail(body);

    return true;
  } catch (error) {
    console.log(error);
    return error;
  }
});

const validateBody = (body: any) => {
  if (!body) {
    throw createError({
      statusCode: 400,
      statusMessage: serverErrors.emptyBody,
    });
  }

  const nameError = validateName(body?.name?.value, body?.name?.required);

  if (nameError) {
    throw createError({
      statusCode: 400,
      statusMessage: nameError,
    });
  }

  const emailError = validateEmail(body?.email?.value, body?.email?.required);

  if (emailError) {
    throw createError({
      statusCode: 400,
      statusMessage: emailError,
    });
  }

  if (body?.type === ContactFormType.extended) {
    const companyError = validateCompany(body?.company?.value, body?.company?.required);

    if (companyError) {
      throw createError({
        statusCode: 400,
        statusMessage: companyError,
      });
    }

    const phoneError = validatePhone(body?.phone?.value, body?.phone?.required);

    if (phoneError) {
      throw createError({
        statusCode: 400,
        statusMessage: phoneError,
      });
    }

    const messageError = validateMessage(body?.message?.value, body?.message?.required);

    if (messageError) {
      throw createError({
        statusCode: 400,
        statusMessage: messageError,
      });
    }
  }
};

const sendEmail = async (body: any) => {
  const { NODEMAILER_USER, NODEMAILER_PASSWORD } = useRuntimeConfig();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    auth: {
      user: NODEMAILER_USER,
      pass: NODEMAILER_PASSWORD,
    },
  });

  const message = getMessage(body);

  const mailOptions = {
    from: body.email,
    to: NODEMAILER_USER,
    subject: `Message from Codex Software Langing`,
    html: message,
  };

  await transporter.sendMail(mailOptions);
};

const getMessage = (body: any) => {
  return body.type === ContactFormType.simplified
    ? `
      <p><b>Name:</b> ${body?.name?.value}</p>
      <p><b>Email:</b> ${body?.email?.value}</p>
      <p>This person is asking for a consultation about page: <b>${body?.pageTitle}</b></p>
    `
    : `
      <p><b>Name:</b> ${body?.name?.value}</p>
      <p><b>Email:</b> ${body?.email?.value}</p>
      <p><b>Company:</b> ${body?.company?.value || 'not indicated'}</p>
      <p><b>Phone:</b> ${body?.phone?.value || 'not indicated'}<p>
      <p><b>Message:</b> ${body?.message?.value || 'not indicated'}</p>
      <p>This person is asking for a consultation about page: <b>${body?.pageTitle}</b></p>
    `;
};