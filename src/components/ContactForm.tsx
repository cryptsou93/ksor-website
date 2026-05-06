"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Le nom doit comporter au moins 2 caractères"),
  email: z.string().email("Adresse email invalide"),
  subject: z.string().min(5, "Le sujet doit comporter au moins 5 caractères"),
  message: z.string().min(20, "Le message doit comporter au moins 20 caractères"),
});

type ContactFormData = z.infer<typeof contactSchema>;
type SubmitStatus = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-12">
        <CheckCircle size={48} className="text-primary mx-auto mb-4" />
        <h3 className="text-xl font-bold text-white mb-2">Message envoyé !</h3>
        <p className="text-gray-400 mb-6">
          Nous vous répondrons dans les 48h ouvrées.
        </p>
        <button onClick={() => setStatus("idle")} className="btn-outline">
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="label">
            Nom complet <span className="text-primary">*</span>
          </label>
          <input
            id="name"
            type="text"
            placeholder="Votre nom"
            className="input-field"
            {...register("name")}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="label">
            Email <span className="text-primary">*</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="contact@entreprise.fr"
            className="input-field"
            {...register("email")}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="label">
          Objet <span className="text-primary">*</span>
        </label>
        <input
          id="subject"
          type="text"
          placeholder="Demande de devis — conception produit"
          className="input-field"
          {...register("subject")}
        />
        {errors.subject && (
          <p className="mt-1 text-sm text-red-400">{errors.subject.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="label">
          Message <span className="text-primary">*</span>
        </label>
        <textarea
          id="message"
          rows={6}
          placeholder="Décrivez votre projet, vos besoins et vos contraintes..."
          className="input-field resize-none"
          {...register("message")}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
        )}
      </div>

      {status === "error" && (
        <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded text-red-400 text-sm">
          <AlertCircle size={18} />
          Une erreur est survenue. Veuillez réessayer ou nous écrire directement à contact@ksorindustrie.com
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? (
          <>
            <span className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
            Envoi en cours...
          </>
        ) : (
          <>
            <Send size={18} />
            Envoyer le message
          </>
        )}
      </button>
    </form>
  );
}
